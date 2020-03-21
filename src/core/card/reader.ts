import { Card, SelectionCard, EventCard, Choice, ChoiceEffect } from ".";

type CardType = "selection" | "event";

export default class CardReader {

    static fromJson(json: string): Card[] {
        return this.fromObject(JSON.parse(json));
    }

    static fromObject(data: any[]): Card[] {
        const cards: Card[] = [];
        for (const cardData of data) {
            cards.push(this.cardFromObject(cardData))
        }
        return cards;
    }

    private static cardFromObject(data: any): Card {
        const cardType: CardType = data.type.toLowerCase();
        const text: string = data.text;
        switch (cardType) {
            case "selection":
                const leftChoice = this.choiceFromObject(data.leftChoice);
                const rightChoice = this.choiceFromObject(data.rightChoice);
                return new SelectionCard(text, leftChoice, rightChoice);
            case "event":
                const choice = this.choiceFromObject(data.choice);
                return new EventCard(text, choice);
            default:
                throw new Error(`Can't create cards of type ${cardType}`);
        }
    }

    private static choiceFromObject(data: any): Choice {
        const text: string = data.text;
        const effectData: EffectData = data.effect;
        const effect = new ChoiceEffect(
            effectData.populationMood || 0,
            effectData.economy || 0,
            effectData.rateOfSusceptibility || 0,
            effectData.rateOfQuarantining || 0,
            effectData.healthSystemCapacity || 0
        );
        return new Choice(text, effect);
    }

}

interface EffectData {
    
    populationMood?: number,
    economy?: number,

    rateOfSusceptibility?: number,
    rateOfQuarantining?: number,

    healthSystemCapacity?: number,

}