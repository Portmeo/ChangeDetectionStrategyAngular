import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StateService {
  private stateAsyncPipe$: BehaviorSubject<string> = new BehaviorSubject('');
  private signals = signal(0);

  constructor (
    private http: HttpClient
  ) {}

  getSignals () {
    return this.signals();
  }

  setSignals (): void {
    this.signals.set(this.signals() + 1);
  }

  getAsyncPipe (): Observable<string> {
    return this.stateAsyncPipe$.asObservable()
      .pipe(
        filter((value) => value !== ''),
        // tap(console.log)
      );
  }

  setAsyncPipe (value: string): void {
    this.stateAsyncPipe$.next(value);
  }

  onPromise (): Promise<any>  {
    return new Promise(resolve =>
      setTimeout(resolve, 2000)
    );
  }

  onRequest (): Observable<any> {
    return this.http.get<any>(environment.urlApi.movie);
  }

  blockEvents (baseNumber: number): void {
    let result = 0;
    for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
  }
}
