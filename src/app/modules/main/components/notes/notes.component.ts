import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../../services/notes/notes.service';
import { Note } from './models/note';
import { Observable, Subject, Subscription } from 'rxjs';
import { Notebook, Classes } from './models/notebook';
import { NotebooksService } from '../../services/notebooks/notebooks.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit, OnDestroy {
  constructor(
    private _notesService: NotesService,
    private _notebooksService: NotebooksService
  ) {}

  private allNotes$: Subscription = new Subscription();
  private allNotebooks$: Subscription = new Subscription();

  public notes: Note[];
  public notebooks: Notebook[];

  ngOnInit(): void {
    this.getAllNotes();
    this.getAllNotebooks();
  }

  ngOnDestroy(): void {
    this.allNotes$.unsubscribe();
    this.allNotebooks$.unsubscribe();
  }

  public getAllNotes(): void {
    console.log('called getallNotes()');

    this.allNotes$ = this._notesService.getAllNotes().subscribe(
      (res) => {
        this.notes = res;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public getAllNotebooks(): void {
    this.allNotebooks$ = this._notebooksService.getAllNotebooks().subscribe(
      (res) => {
        this._notebooksService.notebooks = res;
        this.notebooks = this._notebooksService.notebooks; //   ???
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public async updateNotebook(notebook: Notebook): Promise<void> {
    await this._notebooksService.updateNotebook(notebook).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public deleteNotebook(notebook: Notebook): void {
    if (confirm(`Are you sure you want to delete ${notebook.name} Notebook?`)) {
      this._notebooksService.deleteNotebook(notebook.id).subscribe(
        (res) => {
          console.log(res);

          this.getAllNotebooks();
          // const index: number = this.notebooks.indexOf(notebook);
          // console.log(index);
          // this.notebooks.slice(index, 2);
          console.log(this.notebooks);
        },
        (err) => {
          console.log(err.message);
        }
      );
    }
  }

  public fake(): void {
    console.log('called fake()');
  }
}
