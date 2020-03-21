export class Disease {

    constructor(
        public name: string,
        public rateOfInfection: number,
        public rateOfDeath: number
    ) { }

}

export class Country {

    constructor(
        public name: string,
        public population: number
    ) { }

}
