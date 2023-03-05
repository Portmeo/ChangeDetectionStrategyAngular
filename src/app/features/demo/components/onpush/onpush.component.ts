import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, lastValueFrom, of, Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { StateService } from '../../service/state.service';
import { environment } from 'src/environments/environment';

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
  @Input() user?: User | null;

  constructor (
    private stateService: StateService,
    private http: HttpClient,
    private cdRef: ChangeDetectorRef
  ) { }

  promises (): void {
    lastValueFrom(of('Promise OnPush').pipe(delay(2000)))
      .then(console.log);
    // const promise = new Promise((resolve, reject) => {
    //   resolve('Promise OnPush');
    // });

    // promise.then(console.log)
  }

  request (): void {
    this.http.get<any>(environment.urlApi)
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
    console.log('Onpush - 1 is rendering');
    this.render++;
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
