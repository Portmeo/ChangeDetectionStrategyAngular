import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private stateAsyncPipe: BehaviorSubject<string> = new BehaviorSubject('');
  private stateSubscribe: BehaviorSubject<string> = new BehaviorSubject('');

  getAsyncPipe (): Observable<string> {
    return this.stateAsyncPipe.asObservable();
  }

  setAsyncPipe (asyncPipe: string): void {
    this.stateAsyncPipe.next(asyncPipe);
  }

  getSubscribe (): Observable<string> {
    return this.stateSubscribe.asObservable();
  }

  setSubscribe (subscribe: string): void {
    this.stateSubscribe.next(subscribe);
  }
}
