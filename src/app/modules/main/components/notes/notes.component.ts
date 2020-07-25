import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NotesService } from '../../services/notes/notes.service';
import { Note } from './models/note';
import { Subscription } from 'rxjs';
import { Notebook } from './models/notebook';
import { NotebooksService } from '../../services/notebooks/notebooks.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit, OnDestroy {
  constructor(
    public _notesService: NotesService,
    private _notebooksService: NotebooksService
  ) { }

  private allNotes$: Subscription = new Subscription();
  private allNotebooks$: Subscription = new Subscription();

  public notes: Note[] = [];
  public notebooks: Notebook[] = [];

  public selectedNotebook: Notebook = null;

  ngOnInit(): void {
    this.getAllNotes();
    this.getAllNotebooks();
  }

  ngOnDestroy(): void {
    this.allNotes$.unsubscribe();
    this.allNotebooks$.unsubscribe();
  }

  public onAllNotes(): void {
    this.getAllNotes();
    this.selectedNotebook = null;
  }

  public getAllNotes(): void {
    this.allNotes$ = this._notesService.getAllNotes().subscribe(
      (res) => {
        this._notesService.notes = res;
        this.notes = this._notesService.notes;
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

  public removeNote(id: string): void {
    this._notesService.deleteNote(id)
      .subscribe(
        (res: string) => {
          this.notes = this._notesService.notes.filter(note => note.id !== id);
          this._notesService.notes = this.notes;
        },
        (err: any) => {
          alert(`Error: Something happened!`);
        }
      );

  }

  public updateNote(note: Note, selectedNotebook: Notebook = null) {
    this._notesService.updateNote(note);
    if (!note.title) {
      selectedNotebook ? this.getNotesOfNotebook(selectedNotebook) : this.getAllNotes();
    }
  }

  public async updateNotebook(notebook: Notebook): Promise<void> {
    this._notebooksService.updateNotebook(notebook);
    !notebook.name ? this.getAllNotebooks() : null;
  }

  public deleteNotebook(notebookID: string): void {
    // if (confirm(`Are you sure you want to delete ${notebook.name} Notebook?`)) {
    this._notebooksService.deleteNotebook(notebookID).subscribe(
      (res) => {
        this.notebooks = this.notebooks.filter(notebook => notebook.id !== notebookID);
        this._notebooksService.notebooks = this.notebooks;
      },
      (err) => {
        alert(err.message);
      }
    );
    // }
  }

  public fake(): void {
    console.log('called fake()');
  }

  public setSelectedNotebook(notebook: Notebook): void {
    this.selectedNotebook = notebook;
  }

  public getNotesOfNotebook(notebook: Notebook): void {
    this._notebooksService.getNotesOfNotebook(notebook.id)
      .subscribe(
        (res: Note[]) => {
          this.notes = res;
          this._notesService.notes = this.notes;
        },
        (error: any) => {
          alert(error.message)
        }
      )
  }

}
