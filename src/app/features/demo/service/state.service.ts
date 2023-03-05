import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { timer } from 'rxjs';

@Injectable()
export class StateService {
  private stateAsyncPipe: BehaviorSubject<string> = new BehaviorSubject('');
  private stateSubscription = timer(0, 2000);

  getAsyncPipe (): Observable<string> {
    return this.stateAsyncPipe.asObservable();
  }

  setAsyncPipe (asyncPipe: string): void {
    this.stateAsyncPipe.next(asyncPipe);
  }

  getSubscribe (): Observable<number> {
    return this.stateSubscription;
  }

  blockEvents (baseNumber: number): void {
    let result = 0;
    for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
  }
}
