import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './components/notes/notes.component';
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { NotesService } from './services/notes/notes.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesActionsComponent } from './components/notes-actions/notes-actions.component';
import { MainDashboardComponent } from './main-dashboard.component';
import { NoteComponent } from './components/notes/note/note.component';

@NgModule({
  declarations: [MainDashboardComponent, NotesComponent, NotesActionsComponent, NoteComponent],
  imports: [CommonModule, MainDashboardRoutingModule, HttpClientModule, FormsModule],
  providers: [NotesService],
  exports: [MainDashboardComponent]
})
export class MainDashboardModule { }
