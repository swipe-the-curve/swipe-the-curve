import CountryReader from "./countryReader";
import { Country } from "../domain/common";

test("parse event card from json string", () => {
    const json = `[
        {
            "name": "Germany",
            "population": 80000000
        }
    ]`;
    const countries = new CountryReader().fromJson(json);
    const expectedCountry = new Country("Germany", 80000000);
    expect(countries).toEqual([expectedCountry]);
});
