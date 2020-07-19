import { Notebook } from './notebook';

export class Note {

  public readonly id: string;
  private _lastModifiedOn: string;

  constructor(private _title: string, private _text: string, private _notebook: Notebook) {
    this._title = _title;
    this._text = _text;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get text(): string {
    return this._text;
  }

  public set text(text: string) {
    this._text = text;
  }

  public get lastModifiedOn(): string {
    return this._lastModifiedOn;
  }
  public set lastModifiedOn(value: string) {
    this._lastModifiedOn = value;
  }

  public get notebook(): Notebook {
    return this._notebook;
  }
  public set notebook(value: Notebook) {
    this._notebook = value;
  }

}
