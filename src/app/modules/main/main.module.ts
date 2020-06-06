import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import { MainRoutingModule } from './main-routing.module';
import { NotesService } from './services/notes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, MainRoutingModule, HttpClientModule],
  providers: [NotesService],
})
export class MainModule {}
