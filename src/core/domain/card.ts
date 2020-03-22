export class Card  {

    constructor (
        public id: string,
        public text: string
        // TODO Theme, category, image, source
    ) { }

}

export class SelectionCard extends Card {

    constructor (
        id: string,
        text: string,
        public leftChoice: Choice,
        public rightChoice: Choice
    ) {
        super(id, text);
    }

}

export class EventCard extends SelectionCard {

    constructor (
        id: string,
        text: string,
        public choice: Choice,
    ) {
        super(id, text, choice, choice);
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

        public rateOfQuarantining: number,
        public healthSystemCapacity: number,

        // TODO Additional factors (e.g death rate)
    ) { }

}

export function createGameLostEvent(message: string): EventCard {
    const effect = new ChoiceEffect(0, 0, 0, 0);
    return new EventCard("L", message, new Choice("Na gut...", effect));
}

export function createGameWonEvent(message: string): EventCard {
    const effect = new ChoiceEffect(0, 0, 0, 0);
    return new EventCard("W", message, new Choice("Oh Yeah!", effect));
}
