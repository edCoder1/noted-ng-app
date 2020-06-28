import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subject } from 'rxjs';
import { concatMap, map, filter, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollingService {

  readonly BASE_URL: string = '/entry'
  readonly LONG_PROCESS_URI: string = '/longProcess';
  readonly POLL_URI: string = '/poll'

  constructor(private http: HttpClient) { }

  public startLongProcess(millis: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}${this.LONG_PROCESS_URI}?millis=${millis}`);
  }

  public pollStatus(hash: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}${this.POLL_URI}?id=${hash}`);
  }

  public automaticPollStatus(hash: string, waitTime: number): Observable<any> {

    let stopPolling$: Subject<boolean> = new Subject;

    const statusCheck$: Observable<any> = this.http.get(`${this.BASE_URL}${this.POLL_URI}?id=${hash}`)

    const pollStatus$: Observable<any> = timer(0, waitTime).pipe(
      takeUntil(stopPolling$),
      concatMap(index => statusCheck$),
      map(
        res => {
          console.log(res);

          if (res.status && res.status === 'COMPLETE') {
            console.log('COMPLETE');

            stopPolling$.next(true);
          }

          return res;
        }
      )
    )


    return pollStatus$;
  }


}
