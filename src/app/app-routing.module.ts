import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'feedback',
    loadChildren: () => import('./modules/feedback/feedback.module').then((m) => m.FeedbackModule),
  },
  {
    path: 'notes',
    loadChildren: () => import('./modules/main/main-dashboard.module').then((m) => m.MainDashboardModule),
  },
  {
    path: 'beta',
    loadChildren: () => import('./modules/beta-stuff/beta-stuff.module').then(m => m.BetaStuffModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
