import { ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from '../features/demo/service/state.service';

@Component({
  selector: '',
  template: '',
})
export class BaseComponent {
  render = 0;
  output = 0;
  timer = 0;
  stateSubscription = '';
  subscription?: Subscription;
  interval?: any;

  @Input() data: string = '';
  @Input() child?: string;
  @Output() outputEvent = new EventEmitter();

  constructor (
    readonly stateService: StateService,
    readonly zone: NgZone,
    readonly cdRef: ChangeDetectorRef
  ) {  }

  isRendering (name: string): void {
    console.log(`${name} is rendering`);
    this.render++;
  }

  setOutput (): void {
    this.output++;
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

  initSubscription (): void {
    if (!this.subscription) {
      this.subscription = this.stateService.getSubscribe()
      .subscribe((state: string) => {
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

  promises (): void {
    this.stateService.getPromise().then(() => console.log('Promise OnPush'));
  }

  request (): void {
    this.stateService.getRequest()
      .subscribe(console.log);
  }

  clickEmpty (): void {}

  inputEmpty (input: any): void { }
}
