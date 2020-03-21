export class Disease {

    constructor(
        public name: string,
        public rateOfInfection: number,
        public rateOfDeath: number,
        public rateOfImmunity: number
    ) { }

}

export class Country {

    constructor(
        public name: string,
        public population: number
    ) { }

}
