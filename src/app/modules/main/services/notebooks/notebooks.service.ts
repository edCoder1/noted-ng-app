import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notebook } from '../../components/notes/models/notebook';
import { Observable } from 'rxjs';
import { Note } from '../../components/notes/models/note';

@Injectable({
  providedIn: 'root',
})
export class NotebooksService {
  constructor(private http: HttpClient) { }

  private readonly NOTEBOOKS_BASE_URL = 'api/notebook';
  private readonly NOTEBOOKS_ALL_URI = '/all';

  public notebooks: Notebook[] = [];

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

  public updateNotebook(notebook: Notebook): void {
    if (!notebook.name) {
      alert("A Notebook MUST have a name");
    } else {
      this.http.put<Notebook>(`${this.NOTEBOOKS_BASE_URL}`, notebook).subscribe(
        (res) => {
          console.info(res);
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }

  public deleteNotebook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.NOTEBOOKS_BASE_URL}/${id}`);
  }

  public getNotesOfNotebook(notebookID: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.NOTEBOOKS_BASE_URL}/${notebookID}/notes`);
  }
}
