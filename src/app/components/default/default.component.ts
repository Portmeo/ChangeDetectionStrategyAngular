import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { delay, lastValueFrom, of, Subscription } from 'rxjs';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  render = 0;
  output = 0;
  timer = 0;
  stateSubscription = 0;
  private subscription?: Subscription;
  private interval?: any;
  @Input() data: string = '';
  @Input() stateAsyncPipe: string | null = '';
  @Input() user?: any;

  constructor (
    private stateService: StateService,
    private http: HttpClient
  ) { }

  promises () {
    lastValueFrom(of('Promise Default').pipe(delay(2000))).then(console.log);
    // const promise = new Promise((resolve, reject) => {
    //   resolve('Promise Default');
    // });

    // promise.then(console.log)
  }


  request () {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto')
      .subscribe(console.log);
  }

  initTimer () {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.timer++;
      }, 1000);
    }
  }

  clearTimer () {
    clearInterval(this.interval);
    this.interval = null;
  }

  isRendering() {
    this.render++;
    console.log('Default - 1 is rendering');
  }

  changeData() {
    this.data = 'Default - 1 - ' + this.render;
  }

  click () {}

  input (input: any) { }

  setOutput () {
    this.output++;
  }

  initSubscription () {
    if (!this.subscription) {
      this.subscription = this.stateService.getSubscribe()
      .subscribe((state: number) => {
        this.stateSubscription = state;
      });
    }
  }

  stopSubscription () {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
