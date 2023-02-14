import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Subscription, tap } from 'rxjs';
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
    private cdRef: ChangeDetectorRef
  ) { }

  initTimer () {
    this.interval = setInterval(() => {
      this.timer++;
     }, 1000);
  }

  clearTimer () {
    clearInterval(this.interval);
  }

  isRendering() {
    this.render++;
    console.log('Default - 1 is rendering');
  }

  changeData() {
    this.data = 'Default - 1 - ' + this.render;
  }

  click () { }

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
