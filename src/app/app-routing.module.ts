import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'feedback',
    loadChildren: () =>
      import('./modules/feedback/feedback.module').then(
        (m) => m.FeedbackModule
      ),
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
