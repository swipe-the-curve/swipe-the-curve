import { JsonArrayReader } from ".";
import { Country } from "../domain/common";

export default class CountryReader extends JsonArrayReader<Country> {

    protected elementFromObject(data: any): Country {
        return new Country(data.name, data.population);
    }
    
}