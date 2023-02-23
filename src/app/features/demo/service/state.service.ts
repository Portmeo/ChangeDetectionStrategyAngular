import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { interval } from 'rxjs';

@Injectable()
export class StateService {
  private stateAsyncPipe: BehaviorSubject<string> = new BehaviorSubject('');
  private stateSubscription = interval(2000);

  getAsyncPipe (): Observable<string> {
    return this.stateAsyncPipe.asObservable();
  }

  setAsyncPipe (asyncPipe: string): void {
    this.stateAsyncPipe.next(asyncPipe);
  }

  getSubscribe (): Observable<number> {
    return this.stateSubscription;
  }
}
