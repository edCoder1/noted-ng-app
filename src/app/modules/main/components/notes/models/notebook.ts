export class Notebook {
  id?: string;

  constructor(private _name) { }

  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }
}
