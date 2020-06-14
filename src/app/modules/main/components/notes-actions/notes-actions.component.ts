import { Component, OnInit, Output } from '@angular/core';
import { NotebooksService } from '../../services/notebooks/notebooks.service';
import { Note } from '../notes/models/note';
import { Notebook, Classes } from '../notes/models/notebook';

@Component({
  selector: 'app-notes-actions',
  templateUrl: './notes-actions.component.html',
  styleUrls: ['./notes-actions.component.scss'],
})
export class NotesActionsComponent implements OnInit {
  constructor(private _notebooksService: NotebooksService) {}

  ngOnInit(): void {}

  public newNotebook(name: string): void {
    this._notebooksService.createNotebook(name).subscribe(
      (res) => {
        this._notebooksService.addNotebook(res);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
