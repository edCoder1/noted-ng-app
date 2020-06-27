import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './components/notes/notes.component';
import { MainRoutingModule } from './main-routing.module';
import { NotesService } from './services/notes/notes.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesActionsComponent } from './components/notes-actions/notes-actions.component';

@NgModule({
  declarations: [NotesComponent, NotesActionsComponent],
  imports: [CommonModule, MainRoutingModule, HttpClientModule, FormsModule],
  providers: [NotesService],
})
export class MainModule {}
