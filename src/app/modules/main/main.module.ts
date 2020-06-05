import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
