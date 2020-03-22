import { EpidemicModel, EpidemicState } from "../epidemicmodel"
import { Disease, Country } from "./common";
import { ChoiceEffect, Card, createGameLostEvent, createGameWonEvent } from "./card";
import CardReader from "../reader/cardReader";

export class Game {

    readonly forecastSteps = 15;
    infectedForecasts: number[] = []

    readonly epidemicStates: EpidemicState[]
    readonly model : EpidemicModel
    readonly gameState : GameState
    cards: Card[] = []

    private readonly stateListeners: StateListener[];

    constructor() {
        var disease = new Disease("Corona", 2.3, 0.005, 0)
        var country = new Country("SCHLAND", 80000000)
        fetch(process.env.PUBLIC_URL + "/assets/cards/default.json")
        .then(r => r.json())
        .then(d => {
            this.cards = new CardReader().fromObject(d).reverse();
            this.gameState.currentCard = this.nextCard();
            this.notifyListeners();
        });
        const infectionState = new InfectionState(country, disease, 0.0004)
        this.gameState = new GameState(infectionState, country)
        this.model = new EpidemicModel(0, country.population)
        // TODO set this later if we want to go through some cards without any infections in our country
        this.model.infected = 1
        const initialEpidemicState = new EpidemicState(0, 0, 0)
        initialEpidemicState.healthcareSystemCapacity = infectionState.healthcareSystemCapacity * country.population
        this.epidemicStates = [initialEpidemicState]
        this.stateListeners = []
    }

    public step(effect: ChoiceEffect) {
        this.gameState.populationMood += effect.populationMood
        this.gameState.economy += effect.economy
        this.gameState.infectionState.healthcareSystemCapacity += effect.healthSystemCapacity
        this.gameState.infectionState.rateOfQuarantining += effect.rateOfQuarantining

        var newEpidemicState = this.model.step(
            this.gameState.infectionState.rateOfInfection / this.gameState.country.population,
            this.gameState.infectionState.rateOfDeath(this.epidemicStates[this.epidemicStates.length - 1]),
            this.gameState.infectionState.rateOfImmunity
        )
        newEpidemicState.healthcareSystemCapacity = this.gameState.infectionState.healthcareSystemCapacity  * this.gameState.country.population
        this.epidemicStates.push(newEpidemicState)

        this.infectedForecasts = [];
        for(var i = 0; i < this.forecastSteps; i++) {
            newEpidemicState = this.model.step(
                this.gameState.infectionState.rateOfInfection / this.gameState.country.population,
                this.gameState.infectionState.rateOfDeath(this.epidemicStates[this.epidemicStates.length - 1]),
                this.gameState.infectionState.rateOfImmunity
            )
            this.infectedForecasts.push(newEpidemicState.infected)
        }

        if (this.gameState.populationMood <= 0 || this.gameState.economy <= 0) {
            var lossMessage = "";
            if (this.gameState.populationMood <= 0) {
                lossMessage = "Die Bevölkerung rebelliert und stürzt die Regierung.";
            }
            if (this.gameState.economy <= 0) {
                lossMessage = "Die Wirtschaft bricht zusammen und die Grundversorgung kann nicht mehr gewährleistet werden."
            }
            this.gameState.currentCard = createGameLostEvent(lossMessage);
        } else if (newEpidemicState.infected === 0) {
            this.gameState.currentCard = createGameWonEvent("Die Krise ist bewältigt ohne die Gesellschaft zu zerstören!")
        } else {
            this.gameState.currentCard = this.nextCard();
        }

        this.notifyListeners();
    }

    public dummy() {
        this.gameState.economy -= 0.1;
        this.epidemicStates.push(new EpidemicState(1, 2, 3));
        this.notifyListeners();
    }

    public get daysPassed(): number {
        return this.epidemicStates.length
    }

    nextCard(): Card | undefined {
        return this.cards.pop();
    }

    addStateListener(listener: StateListener) {
        this.stateListeners.push(listener);
    }

    private notifyListeners() {
        for (const listener of this.stateListeners) {
            listener();
        }
    }

}

export class GameState {

    private _populationMood = 0.8;
    private _economy = 0.8;
    public currentCard: Card | undefined = undefined;

    constructor(
        public readonly infectionState: InfectionState,
        public readonly country: Country
    ) { }

    get populationMood(): number {
        return this._populationMood;
    }

    set populationMood(populationMood: number) {
        this._populationMood = clamp(populationMood, 0, 1);
    }

    get economy(): number {
        return this._economy;
    }

    set economy(economy: number) {
        this._economy = clamp(economy, 0, 1);
    }

}

export class InfectionState {

    private _rateOfQuarantining = 0;
    private _healthcareSystemCapacity: number;

    constructor(
        private country: Country,
        public disease: Disease,
        healthcareSystemCapacity: number
    ) {
        this._healthcareSystemCapacity = healthcareSystemCapacity;
    }

    public get rateOfQuarantining() : number {
        return this._rateOfQuarantining
    }

    public set rateOfQuarantining(rateOfQuarantining: number) {
        this._rateOfQuarantining = clamp(rateOfQuarantining, 0, 1);
    }

    public get healthcareSystemCapacity() : number {
        return this._healthcareSystemCapacity
    }

    public set healthcareSystemCapacity(healthcareSystemCapacity: number) {
        this._healthcareSystemCapacity = clamp(healthcareSystemCapacity, 0, 1);
    }

    public rateOfDeath(currentEpidemicState: EpidemicState): number {
        // TODO Additional factors 
        const absoluteHealthcareSystemCapacity = this.healthcareSystemCapacity * this.country.population;
        const overload = Math.max(currentEpidemicState.infected - absoluteHealthcareSystemCapacity, 0);
        const overloadFactor = overload / absoluteHealthcareSystemCapacity;
        const rateOfDeathFactor = Math.min(1 + overloadFactor, 2);
        return Math.min(this.disease.rateOfDeath * rateOfDeathFactor, 1);
    }

    public get rateOfInfection() : number {
        // TODO Additional factors 
        const quarantineFactor = 1 - this.rateOfQuarantining;
        return this.disease.rateOfInfection * quarantineFactor;
    }

    public get rateOfImmunity() : number {
        return this.disease.rateOfImmunity
    }

}


export interface StateListener {
    (): void;
}


function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}
