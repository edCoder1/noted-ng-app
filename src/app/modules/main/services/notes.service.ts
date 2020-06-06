import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  private readonly NOTES_BASE_URL = 'http://localhost:6060/api';
  private readonly NOTES_ALL_URI = '/note/all';

  public getAllNotes(): Observable<any> {
    return this.http.get(`${this.NOTES_BASE_URL}${this.NOTES_ALL_URI}`);
  }
}
