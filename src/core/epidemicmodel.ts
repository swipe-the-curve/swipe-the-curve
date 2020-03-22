export class EpidemicModel {

    recovered = 0;
    dead = 0;

    constructor(
        public infected: number,
        private susceptibles: number,
    ) {

    }

    public step(rateOfInfection: number, rateOfDeath: number, rateOfImmunity: number) {
        console.log(`RateOfInfection: ${rateOfInfection}\nRateOfDeath: ${rateOfDeath}\nRateOfImmunity: ${rateOfImmunity}`)
        const rateOfRecovery = 1 - rateOfDeath;
        var newImmune = Math.floor(Math.min(Math.max(rateOfImmunity * this.susceptibles, 0), this.susceptibles))
        var newInfected = Math.floor(Math.min(Math.max(rateOfInfection * this.susceptibles * this.infected, 0), this.susceptibles))
        var newRecovered = Math.floor(Math.min(Math.max(rateOfRecovery * this.infected, 0), this.infected))
        var newDead = Math.floor(Math.min(Math.max(rateOfDeath * this.infected, 0), this.infected - newRecovered))

        this.susceptibles = this.susceptibles - newInfected - newImmune
        this.infected = this.infected + newInfected - newRecovered - newDead
        this.recovered = this.recovered + newRecovered
        this.dead = this.dead + newDead
        return new EpidemicState(this.recovered, this.infected, this.dead)
    }
}

export class EpidemicState {
    public healthcareSystemCapacity = 0
    constructor(
        public readonly recovered: number,
        public readonly infected: number,
        public readonly dead: number,
    ) {

    }
}