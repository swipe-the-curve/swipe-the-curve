import DiseaseReader from "./diseaseReader";
import { Disease } from "../domain/common";

test("parse event card from json string", () => {
    const json = `[
        {
            "name": "COVID-19",
            "rateOfInfection": 6,
            "rateOfDeath": 0.015,
            "rateOfImmunity": 0
        }
    ]`;
    const diseases = new DiseaseReader().fromJson(json);
    const expectedDisease = new Disease("COVID-19", 6, 0.015, 0);
    expect(diseases).toEqual([expectedDisease]);
});
