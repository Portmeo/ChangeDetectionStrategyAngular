import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private stateAsyncPipe: BehaviorSubject<string> = new BehaviorSubject('');
  private stateSubscribe = interval(1000);

  getAsyncPipe (): Observable<string> {
    return this.stateAsyncPipe.asObservable();
  }

  setAsyncPipe (asyncPipe: string): void {
    this.stateAsyncPipe.next(asyncPipe);
  }

  getSubscribe (): Observable<number> {
    return this.stateSubscribe;
  }
}
