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

    text: string;
    effect: ChoiceEffect;

}

export class ChoiceEffect {

    populationMoodEffect: number;
    economyEffect: number;

    rateOfSusceptibilityEffect: number;
    rateOfQuarantiningEffect: number;

    healthSystemCapacityEffect: number;

    // TODO Additional factors (e.g death rate)

}
