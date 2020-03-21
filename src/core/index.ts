import { Country, Disease } from "./domain/common";

export class GameState {

    day: number;

    constructor(
        public country: Country,
        public infectionState: InfectionState
    ) {
        this.day = 0
    }

}

export class InfectionState {


    infectedPopulation: number;
    deceasedPopulation: number;

    populationMood: number;
    economy: number;

    constructor(
        public disease: Disease,
        public rateOfSusceptibility: number,
        public rateOfQuarantining: number,
        public healthSystemCapacity: number
    ) {
        this.infectedPopulation = 0;
        this.deceasedPopulation = 0;
        this.populationMood = 1;
        this.economy = 1;
    }

    public get rateOfDeath(): number {
        // TODO Additional factors 
        return this.disease.rateOfDeath;
    }

    public get rateOfRecovery() : number {
        return 1 - this.rateOfDeath;
    }

}
