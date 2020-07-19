import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../../components/notes/models/note';
import { Notebook } from '../../components/notes/models/notebook';

@Injectable({
  providedIn: 'root',
})
export class NotesService {

  public notes: Note[] = [];

  constructor(private http: HttpClient) { }

  private readonly NOTES_BASE_URL = 'api/note';
  private readonly NOTES_ALL_URI = '/all';

  public getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.NOTES_BASE_URL}${this.NOTES_ALL_URI}`);
  }

  public createNote(selectedNotebook: Notebook): Observable<Note> {
    let newNote: Note = new Note("New Note", "Write something here :)", selectedNotebook);
    return this.http.post<Note>(`${this.NOTES_BASE_URL}`, { title: newNote.title, text: newNote.text, notebook: selectedNotebook });
  }

  public addNote(newNote: Note): void {
    this.notes.push(newNote)
  }


  public deleteNote(id: string): Observable<string> {
    return this.http.delete(`${this.NOTES_BASE_URL}/${id}`, { responseType: "text" });
  }

  public updateNote(note: Note): void {
    if (!note.title) {
      alert("A Note MUST have Title");
    } else {
      this.http.put<Note>(`${this.NOTES_BASE_URL}`, note).subscribe(
        (res) => {
          console.info(res);
        },
        (err) => {
          alert(err.message);
          // should this be in the component?
        }
      );
    }
  }

}
