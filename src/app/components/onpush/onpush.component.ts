import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, lastValueFrom, of, Subscription } from 'rxjs';
import { StateService } from 'src/app/service/state.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent {
  public render = 0;
  public output = 0;
  public timer = 0;
  public stateSubscription = 0;
  private subscription?: Subscription;
  private interval?: any;
  @Input() data: string = '';
  @Input() stateAsyncPipe: string | null  = '';
  @Input() user?: User;

  constructor (
    private stateService: StateService,
    private http: HttpClient,
    private cdRef: ChangeDetectorRef
  ) {

  }

  promises (): void {
    lastValueFrom(of('Promise OnPush').pipe(delay(2000)))
      .then(console.log);
    // const promise = new Promise((resolve, reject) => {
    //   resolve('Promise OnPush');
    // });

    // promise.then(console.log)
  }

  request (): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto')
      .pipe(delay(2000))
      .subscribe(console.log);
  }

  initTimer (): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.timer++;
        // this.cdRef.markForCheck();
       }, 1000);
    }
  }

  clearTimer (): void {
    clearInterval(this.interval);
    this.interval = null;
  }

  isRendering (): void {
    this.render++;
    console.log('Onpush - 1 is rendering');
  }

  changeData (): void {
    this.data = 'Onpush - 1 - ' + this.render;
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
        // this.cdRef.markForCheck();
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
