import CardReader from "./reader";
import { EventCard, Choice, ChoiceEffect, SelectionCard } from ".";

test("parse event card from json string", () => {
    const json = `[
        {
            "type": "Event",
            "text": "Event Card Text",
            "choice": {
                "text": "What...",
                "effect": {
                    "economy": -1
                }
            }
        }
    ]`;
    const cards = CardReader.fromJson(json);
    const expectedCard = new EventCard(
        "Event Card Text",
        new Choice(
            "What...",
            new ChoiceEffect(0, -1, 0, 0 ,0)
        )
    );
    expect(cards).toEqual([expectedCard]);
});

test("parse selection card from json string", () => {
    const json = `[
        {
            "type": "Selection",
            "text": "Selection Card Text",
            "leftChoice": {
                "text": "No",
                "effect": {
                    "populationMood": -0.5,
                    "healthSystemCapacity": 0.1,
                    "rateOfSusceptibility": -0.3
                }
            },
            "rightChoice": {
                "text": "Yes",
                "effect": {
                    "populationMood": 0.2,
                    "rateOfSusceptibility": 0.1
                }
            }
        }
    ]`;
    const cards = CardReader.fromJson(json);
    const expectedCard = new SelectionCard(
        "Selection Card Text",
        new Choice(
            "No",
            new ChoiceEffect(-0.5, 0, -0.3, 0 ,0.1)
        ),
        new Choice(
            "Yes",
            new ChoiceEffect(0.2, 0, 0.1, 0 ,0)
        )
    );
    expect(cards).toEqual([expectedCard]);
});
