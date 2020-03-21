export class Card  {

    constructor (
        public text: string
        // TODO Theme, category, image, source
    ) { }

}

export class SelectionCard extends Card {

    constructor (
        text: string,
        public leftChoice: Choice,
        public rightChoice: Choice
    ) {
        super(text);
    }

}

export class EventCard extends SelectionCard {

    constructor (
        text: string,
        public choice: Choice,
    ) {
        super(text, choice, choice);
    }

}

export class Choice {

    constructor(
        public text: string,
        public effect: ChoiceEffect
    ) { }

}

export class ChoiceEffect {

    constructor(
        public populationMood: number,
        public economy: number,

        public rateOfSusceptibility: number,
        public rateOfQuarantining: number,

        public healthSystemCapacity: number,

        // TODO Additional factors (e.g death rate)
    ) { }

}
