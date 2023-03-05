import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { timer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StateService {
  private stateAsyncPipe: BehaviorSubject<string> = new BehaviorSubject('');
  private stateSubscription: BehaviorSubject<string> = new BehaviorSubject('');

  constructor (
    private http: HttpClient
  ) {}

  getAsyncPipe (): Observable<string> {
    return this.stateAsyncPipe.asObservable();
  }

  setAsyncPipe (asyncPipe: string): void {
    this.stateAsyncPipe.next(asyncPipe);
  }

  getSubscribe (): Observable<string> {
    return this.stateSubscription.asObservable();
  }

  setSubscribe (subsribe: string): void {
    this.stateSubscription.next(subsribe);
  }

  getPromise (): Promise<any>  {
    return new Promise(resolve =>
      setTimeout(resolve, 2000)
    );
  }

  getRequest (): Observable<any> {
    return this.http.get<any>(environment.urlApi)
  }

  blockEvents (baseNumber: number): void {
    let result = 0;
    for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
  }
}
