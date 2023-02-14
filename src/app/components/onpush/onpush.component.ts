import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent {
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
    private cdRef: ChangeDetectorRef
  ) { }

  initTimer () {
    this.interval = setInterval(() => {
      this.timer++;
      // this.cdRef.markForCheck();
     }, 1000);
  }

  clearTimer () {
    clearInterval(this.interval);
  }

  isRendering() {
    this.render++;
    console.log('Onpush - 1 is rendering');
  }

  changeData() {
    this.data = 'Onpush - 1 - ' + this.render;
  }

  click() {}

  input (input: any) { }

  setOutput () {
    this.output++;
  }

  initSubscription () {
    if (!this.subscription) {
      this.subscription = this.stateService.getSubscribe()
      .subscribe((state: number) => {
        this.stateSubscription = state;
        // this.cdRef.markForCheck();
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
