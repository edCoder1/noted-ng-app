import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollingService {

  readonly BASE_URL: string = '/entry'
  readonly LONG_PROCESS_URI: string = '/longProcess';
  readonly POLL_URI = '/poll'

  constructor(private http: HttpClient) { }

  public startLongProcess(): Observable<any> {
    return this.http.get(`${this.BASE_URL}${this.LONG_PROCESS_URI}`);
  }

  public pollStatus(hash: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}${this.POLL_URI}?id=${hash}`);
  }


}
