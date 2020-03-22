import { EpidemicModel, EpidemicState } from "../epidemicmodel"
import { Disease, Country } from "./common";
import { ChoiceEffect, Card, createGameLostEvent, createGameWonEvent } from "./card";
import CardReader from "../reader/cardReader";

const story: string[] = ["E0", "A1", "E1", "A31", "E21", "A17", "A33", "?E", "A32", "A26", "A9", "E33", "?E", "A21", "A24", "A25", "?E", "A19"]

const randomEarly: string[] = ["E2", "E16", "E21", "E33", "E34", "E35", "E36"]
const randomMid: string[] = ["E2", "E16", "E21", "E33", "E34", "E35", "E36"]
const randomLate: string[] = ["E2", "E16", "E21", "E33", "E34", "E35", "E36"]

export class Game {

    readonly epidemicStates: EpidemicState[]
    readonly model: EpidemicModel
    readonly gameState: GameState
    private hasStarted = false
    cards: Card[] = []

    readonly stateListeners: StateListener[];

    constructor() {
        var disease = new Disease("Corona", 2.3, 0.005, 0)
        var country = new Country("SCHLAND", 80000000)
        const infectionState = new InfectionState(country, disease, 0.0004)
        this.gameState = new GameState(infectionState, country)
        this.model = new EpidemicModel(0, country.population)
        this.model.infected = 0
        const initialEpidemicState = new EpidemicState(0, 0, 0)
        initialEpidemicState.healthcareSystemCapacity = Math.floor(infectionState.healthcareSystemCapacity * country.population)
        this.epidemicStates = [initialEpidemicState]
        this.stateListeners = []

        this.initializeCards();
    }

    private getRandomCardFromEventList(randomList: string[]): string {
        let randomIndex = Math.floor(Math.random() * randomEarly.length)
        let randomElement: string = randomEarly[randomIndex]
        randomList.splice(randomIndex, 1)
        return randomElement
    }

    private initializeCards() {
        fetch(process.env.PUBLIC_URL + "/assets/cards/default.json")
            .then(r => r.json())
            .then(d => {
                const cardsById: { [id: string]: Card } = {};
                new CardReader().fromObject(d).forEach(c => cardsById[c.id] = c)
                this.cards = story.reverse().map(id => {
                    if (id.startsWith("?")) {
                        if (id.includes("E")) {
                            console.log(randomEarly.length)
                            let randomElement = this.getRandomCardFromEventList(randomEarly)
                            console.log(randomEarly.length)
                            return cardsById[randomElement];
                        } else if (id.includes("M")) {
                            let randomElement = this.getRandomCardFromEventList(randomMid)
                            return cardsById[randomElement];
                        } else if (id.includes("L")) {
                            let randomElement = this.getRandomCardFromEventList(randomLate)
                            return cardsById[randomElement];
                        } else {
                            return cardsById[id];
                        }
                    } else {
                        return cardsById[id];
                    }
                })
                this.gameState.currentCard = this.nextCard();
                this.notifyListeners();
            });
    }

    public step(effect: ChoiceEffect) {
        if (this.gameState.currentCard!.id === "A1") {
            this.model.infected = 1;
            this.hasStarted = true;
            const patientZero = new EpidemicState(0, 1, 0)
            patientZero.healthcareSystemCapacity = Math.floor(this.gameState.infectionState.healthcareSystemCapacity * this.gameState.country.population)
            this.epidemicStates.push(patientZero);
            this.gameState.currentCard = this.nextCard();
            this.notifyListeners();
            return;
        }
        if (!this.hasStarted) {
            this.gameState.currentCard = this.nextCard();
            this.notifyListeners();
            return;
        }

        this.gameState.populationMood += effect.populationMood
        this.gameState.economy += effect.economy
        this.gameState.infectionState.healthcareSystemCapacity = this.gameState.infectionState.healthcareSystemCapacity * (1 + effect.healthSystemCapacity)
        this.gameState.infectionState.rateOfQuarantining += effect.rateOfQuarantining

        var newEpidemicState = this.model.step(
            this.gameState.infectionState.rateOfInfection / this.gameState.country.population,
            this.gameState.infectionState.rateOfDeath(this.epidemicStates[this.epidemicStates.length - 1]),
            this.gameState.infectionState.rateOfImmunity
        )
        newEpidemicState.healthcareSystemCapacity = Math.floor(this.gameState.infectionState.healthcareSystemCapacity * this.gameState.country.population)
        if (newEpidemicState.infected < newEpidemicState.healthcareSystemCapacity) {
            this.gameState.healthCareSystem = 1 - 0.5 * (newEpidemicState.infected / newEpidemicState.healthcareSystemCapacity)
        } else {
            this.gameState.healthCareSystem = 0.5 - Math.min(0.5 * ((newEpidemicState.infected - newEpidemicState.healthcareSystemCapacity) / newEpidemicState.healthcareSystemCapacity), 0.501)
        }
        this.epidemicStates.push(newEpidemicState)

        if (this.gameState.populationMood <= 0 || this.gameState.economy <= 0 || this.gameState.healthCareSystem <= 0) {
            var lossMessage = "";
            if (this.gameState.healthCareSystem <= 0) {
                lossMessage = "Das Gesundheitssystem ist zusammengebrochen. Der Virus ist außer Kontrolle und wir müssen mit vielen Toten rechnen.";
            }
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

    private _populationMood = 1;
    private _economy = 1;
    private _healthCareSystem = 1;
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

    get healthCareSystem(): number {
        return this._healthCareSystem;
    }

    set healthCareSystem(healthCareSystem: number) {
        this._healthCareSystem = clamp(healthCareSystem, 0, 1);
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

    public get rateOfQuarantining(): number {
        return this._rateOfQuarantining
    }

    public set rateOfQuarantining(rateOfQuarantining: number) {
        this._rateOfQuarantining = clamp(rateOfQuarantining, 0, 1);
    }

    public get healthcareSystemCapacity(): number {
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

    public get rateOfInfection(): number {
        // TODO Additional factors 
        const quarantineFactor = 1 - this.rateOfQuarantining;
        return this.disease.rateOfInfection * quarantineFactor;
    }

    public get rateOfImmunity(): number {
        return this.disease.rateOfImmunity
    }

}


export interface StateListener {
    (): void;
}


function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}
