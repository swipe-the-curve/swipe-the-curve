import { EpidemicModel, EpidemicState } from "../epidemicmodel"
import { Disease, Country } from "./common";
import { ChoiceEffect, Card } from "./card";
import CardReader from "../reader/cardReader";

export class Game {

    readonly epidemicStates: EpidemicState[]
    readonly model : EpidemicModel
    readonly gameState : GameState
    cards: Card[] = []

    readonly stateListeners: StateListener[];

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
        this.gameState = new GameState(new InfectionState(country, disease, 0.0004), country)
        this.model = new EpidemicModel(0, country.population)
        // TODO set this later if we want to go through some cards without any infections in our country
        this.model.infected = 1
        this.epidemicStates = [new EpidemicState(0, 0, 0)]
        this.stateListeners = []
    }

    public step(effect: ChoiceEffect) {
        this.gameState.populationMood += effect.populationMood
        this.gameState.economy += effect.economy
        this.gameState.infectionState.healthcareSystemCapacity += effect.healthSystemCapacity
        this.gameState.infectionState.rateOfQuarantining += effect.rateOfQuarantining

        var newEpidemicState = this.model.step(
            this.gameState.infectionState.rateOfInfection,
            this.gameState.infectionState.rateOfDeath(this.epidemicStates[this.epidemicStates.length - 1]),
            this.gameState.infectionState.rateOfImmunity
        )
        this.epidemicStates.push(newEpidemicState)

        this.gameState.currentCard = this.nextCard();
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

    public populationMood = 0.8;
    public economy = 0.8;
    public currentCard: Card | undefined = undefined;

    constructor(
        public readonly infectionState: InfectionState,
        public readonly country: Country
    ) {
    }

}

export class InfectionState {

    public rateOfQuarantining = 0;

    constructor(
        private country: Country,
        public disease: Disease,
        public healthcareSystemCapacity: number
    ) {
    }

    public rateOfDeath(currentEpidemicState: EpidemicState): number {
        // TODO Additional factors 
        const absoluteHealthcareSystemCapacity = this.healthcareSystemCapacity * this.country.population;
        const overload = Math.max(currentEpidemicState.infected - absoluteHealthcareSystemCapacity, 0);
        const overloadFactor = overload / absoluteHealthcareSystemCapacity;
        return this.disease.rateOfDeath * (1 + overloadFactor);
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
