import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesMainComponent } from './components/notes-main/notes-main.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
