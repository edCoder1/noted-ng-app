import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollingComponent } from './components/polling/polling.component';
import { PollingService } from './services/polling.service';
import { OutletComponent } from './components/outlet/outlet.component';

const routes: Routes = [{
  path: '',
  component: OutletComponent
},
{
  path: 'polling',
  component: PollingComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [PollingService],
  exports: [RouterModule],
})
export class BetaStuffRoutingModule { }
