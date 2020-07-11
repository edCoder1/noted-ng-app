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
  public timeMillis: number;

  constructor(private _pollingService: PollingService) { }

  ngOnInit(): void {
  }


  startLongProcess(millis: number): void {
    console.log('starting long process...');

    console.log(millis);

    this._pollingService.startLongProcess(millis).subscribe(
      res => {
        this.pollStatus = res;
        this.hashToPoll = res.hash;


        this._pollingService.automaticPollStatus(res.hash, 2500).subscribe(
          res => {
            console.log(res);
            this.pollStatus = res;
          }
        )

      },
      error => {
        console.warn(error);
        alert(error.message)
      });
  }


  manualPoll(hash: string) {
    this._pollingService.pollStatus(hash).subscribe(
      res => {
        this.pollStatus = res;
      },
      error => {
        console.warn(error);
        alert(error.message)
      }
    );
  }

}
