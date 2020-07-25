import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/note';
import { Notebook } from '../models/notebook';
import { NotesService } from '../../../services/notes/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private _notesService: NotesService) { }

  @Input()
  note: Note;
  @Output()
  updatedNoteEvent = new EventEmitter<Note>();
  @Output()
  removeNoteEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public onRemoveNote(id: string) {
    this.removeNoteEvent.emit(id);
  }


  public emitUpdateNoteEvent(note: Note): void {
    this.updatedNoteEvent.emit(note)
  }

}
