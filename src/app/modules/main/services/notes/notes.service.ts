import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from '../../components/notes/models/note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) { }

  private readonly NOTES_BASE_URL = 'api/note';
  private readonly NOTES_ALL_URI = '/all';

  public getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.NOTES_BASE_URL}${this.NOTES_ALL_URI}`);
  }

  public updateNote(note: Note): Observable<Note> {
    console.warn(note);
    return
  }
}
