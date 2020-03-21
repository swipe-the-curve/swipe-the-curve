import { JsonArrayReader } from ".";
import { Disease } from "../domain/common";

export default class DiseaseReader extends JsonArrayReader<Disease> {

    protected elementFromObject(data: any): Disease {
        return new Disease(data.name, data.rateOfInfection, data.rateOfDeath, data.rateOfImmunity);
    }
    
}