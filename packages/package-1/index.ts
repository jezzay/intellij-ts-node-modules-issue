

export class PackageOne {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public name(): string {
        return this._name;
    }
}