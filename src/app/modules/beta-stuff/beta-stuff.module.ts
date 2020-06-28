import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollingComponent } from './components/polling/polling.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { BetaStuffRoutingModule } from './beta-stuff-routing.module';

@NgModule({
  declarations: [OutletComponent, PollingComponent],
  imports: [CommonModule, BetaStuffRoutingModule],
})
export class BetaStuffModule { }
