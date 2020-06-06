import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  constructor(private _notesService: NotesService) {}

  ngOnInit(): void {}

  public getAllNotes(): any {
    return this._notesService.getAllNotes().subscribe((data) => {
      console.log(data);
    });
  }
}
