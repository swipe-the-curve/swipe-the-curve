export abstract class JsonReader<T> {

    fromJson(json: string): T {
        return this.fromObject(JSON.parse(json));
    }

    abstract fromObject(data: any): T;
}

export abstract class JsonArrayReader<T> extends JsonReader<T[]> {

    fromObject(data: any): T[] {
        const result = [];
        for (const elementData of data) {
            result.push(this.elementFromObject(elementData))
        }
        return result;
    }

    protected abstract elementFromObject(data: any): T;

}