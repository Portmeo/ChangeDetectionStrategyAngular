import { HttpClient } from '@angular/common/http';
import { Component, Input, NgZone } from '@angular/core';
import { delay, lastValueFrom, of, Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  public render = 0;
  public output = 0;
  public timer = 0;
  public stateSubscription = 0;
  private subscription?: Subscription;
  private interval?: any;
  @Input() data: string = '';
  @Input() stateAsyncPipe: string | null = '';
  @Input() user?: User;

  constructor (
    private stateService: StateService,
    private http: HttpClient,
    private zone: NgZone
  ) { }

  promises (): void {
    lastValueFrom(of('Promise Default').pipe(delay(2000)))
      .then(console.log);
    // const promise = new Promise((resolve, reject) => {
    //   resolve('Promise Default');
    // });

    // promise.then(console.log)
  }


  request (): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto')
      .subscribe(console.log);
  }

  initTimer (): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.timer++;
      }, 1000);
    }
    // this.zone.runOutsideAngular(() => {
    //   if (!this.interval) {
    //     this.interval = setInterval(() => {
    //       this.timer++;
    //     }, 1000);
    //   }
    // });
  }

  clearTimer (): void {
    clearInterval(this.interval);
    this.interval = null;
  }

  isRendering (): void {
    console.log('Default - 1 is rendering');
    this.render++;
  }

  changeData (): void {
    this.data = 'Default - 1 - ' + this.render;
  }

  click (): void {}

  input (input: any) { }

  setOutput (): void {
    this.output++;
  }

  initSubscription (): void {
    if (!this.subscription) {
      this.subscription = this.stateService.getSubscribe()
      .subscribe((state: number) => {
        this.stateSubscription = state;
      });
    }
  }

  stopSubscription (): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
