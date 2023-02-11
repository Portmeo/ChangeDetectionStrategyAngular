import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: BehaviorSubject<string> = new BehaviorSubject('');

  getState (): Observable<string> {
    return this.state.asObservable();
  }

  setState (state: string): void {
    this.state.next(state);
  }
}
