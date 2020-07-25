import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Components
import { NotesActionsComponent } from './components/notes-actions/notes-actions.component';
import { MainDashboardComponent } from './main-dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/notes/note/note.component';
// Services
// import { NotesService } from './services/notes/notes.service';   // Not needed?
// Pipes
import { NoteTextFilterPipe } from './pipes/search-text/search-text.pipe';

@NgModule({
  declarations: [MainDashboardComponent, NotesComponent, NoteComponent, NotesActionsComponent, NoteTextFilterPipe],
  imports: [CommonModule, MainDashboardRoutingModule, HttpClientModule, FormsModule],
  // providers: [NotesService],
  exports: [MainDashboardComponent]
})
export class MainDashboardModule { }
