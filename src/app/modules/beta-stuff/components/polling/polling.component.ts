import { Component, OnInit } from '@angular/core';
import { PollingService } from '../../services/polling.service';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss']
})
export class PollingComponent implements OnInit {

  public hashToPoll: string;
  public pollStatus: any;

  constructor(private _pollingService: PollingService) { }

  ngOnInit(): void {
  }


  startLongProcess() {
    console.log('starting long process...');
    this._pollingService.startLongProcess().subscribe(
      res => {
        this.pollStatus = res;
        this.hashToPoll = res.hash;
      })
  }


  manualPoll(hash: string) {
    this._pollingService.pollStatus(hash).subscribe(
      res => {
        this.pollStatus = res;
      }
    )
  }

}
