import { Component, OnInit, Input } from '@angular/core';
import { Notebook } from '../notes/models/notebook';
import { NotebooksService } from '../../services/notebooks/notebooks.service';
import { Note } from '../notes/models/note';
import { NotesService } from '../../services/notes/notes.service';

@Component({
  selector: 'app-notes-actions',
  templateUrl: './notes-actions.component.html',
  styleUrls: ['./notes-actions.component.scss'],
})

export class NotesActionsComponent implements OnInit {


  @Input() selectedNotebook: Notebook;


  constructor(
    private _notebooksService: NotebooksService,
    private _notesService: NotesService
  ) { }

  ngOnInit(): void { }

  public newNotebook(): void {
    const newNotebook: Notebook = new Notebook("New Notebook");
    this._notebooksService.createNotebook(newNotebook.name).subscribe(
      (newNotebook_res: Notebook) => {
        this._notebooksService.addNotebook(newNotebook_res);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public createNote(selectedNotebook: Notebook): void {
    console.log(selectedNotebook);

    this._notesService.createNote(selectedNotebook).subscribe(
      (newNote: Note) => {
        this._notesService.addNote(newNote);
      },
      (err: any) => {
        alert(err.message)
      }
    )
  }

}
