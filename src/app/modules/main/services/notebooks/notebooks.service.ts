import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notebook } from '../../components/notes/models/notebook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotebooksService {
  constructor(private http: HttpClient) {}

  private readonly NOTEBOOKS_BASE_URL = 'http://localhost:6060/api/notebook';
  private readonly NOTEBOOKS_ALL_URI = '/all';

  public notebooks: Notebook[];

  public getAllNotebooks(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(
      `${this.NOTEBOOKS_BASE_URL}${this.NOTEBOOKS_ALL_URI}`
    );
  }

  public createNotebook(name: String): Observable<Notebook> {
    return this.http.post<Notebook>(`${this.NOTEBOOKS_BASE_URL}`, { name });
  }

  public addNotebook(notebook: Notebook): void {
    this.notebooks.push(notebook);
  }
}
