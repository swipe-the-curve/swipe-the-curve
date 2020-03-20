export class GameState {

    country: Country;
    infectionState: InfectionState;

}


export class InfectionState {

    disease: Disease;

    rateOfSusceptibility: number;
    rateOfQuarantining: number;

    infectedPopulation: number;
    deceasedPopulation: number;

    populationMood: number;
    economy: number;
    healthSystemCapacity: number;

    public get rateOfDeath(): number {
        // TODO Additional factors 
        return this.disease.rateOfDeath;
    }

    public get rateOfRecovery() : number {
        return 1 - this.rateOfDeath;
    }

}


export class Disease {

    name: string;

    rateOfInfection: number;
    rateOfDeath: number;

}


export class Country {

    name: string;

    totalPopulation: number;

}
