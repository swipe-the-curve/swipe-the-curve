import { EpidemicModel, EpidemicState } from "../epidemicmodel"
import { Disease, Country } from "./common";
import { ChoiceEffect } from "./card";

export class Game {

    epidemicStates: EpidemicState[] = []
    readonly model : EpidemicModel
    readonly gameState : GameState

    constructor() {
        var disease = new Disease("Corona", 2.3, 0.005, 0)
        var country = new Country("SCHLAND", 80000000)
        this.gameState = new GameState(new InfectionState(disease, 0.0004), country)
        this.model = new EpidemicModel(0, country.population)
    }

    public step(effect: ChoiceEffect) {
        this.gameState.populationMood += effect.populationMood
        this.gameState.economy += effect.economy
        this.gameState.infectionState.healthcareSystemCapacity += effect.healthSystemCapacity
        this.gameState.infectionState.rateOfQuarantining += effect.rateOfQuarantining
        // TODO rare of suspectability

        var newEpidemicState = this.model.step(this.gameState.infectionState.rateOfInfection,
            this.gameState.infectionState.rateOfRecovery,
            this.gameState.infectionState.rateOfDeath,
            this.gameState.infectionState.rateOfImmunity)
        this.epidemicStates.push(newEpidemicState)
    }

    public get daysPassed(): number {
        return this.epidemicStates.length
    }

}

export class GameState {

    public populationMood = 0.8;
    public economy = 0.8;

    constructor(
        public readonly infectionState: InfectionState,
        public readonly country: Country        
    ) {
    }

}

export class InfectionState {

    public rateOfQuarantining = 0;

    constructor(
        public disease: Disease,
        public healthcareSystemCapacity: number
    ) {
    }

    public get rateOfDeath(): number {
        // TODO Additional factors 
        return this.disease.rateOfDeath;
    }

    public get rateOfRecovery() : number {
        return 1 - this.rateOfDeath;
    }

    public get rateOfInfection() : number {
        // TODO Additional factors 
        return this.disease.rateOfInfection
    }

    public get rateOfImmunity() : number {
        return this.disease.rateOfImmunity
    }

}
