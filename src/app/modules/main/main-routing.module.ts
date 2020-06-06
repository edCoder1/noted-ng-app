import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NotesService } from './services/notes.service';

const routes: Routes = [{ path: '', component: NotesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [NotesService],
  exports: [RouterModule],
})
export class MainRoutingModule {}
