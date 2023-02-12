import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
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
  stateSubscribe = '';
  @Input() data: string = '';
  @Input() stateAsyncPipe: string | null = '';
  @Input() user?: any;

  constructor (
    private stateService: StateService,
    private cdRef: ChangeDetectorRef
  ) {
    // setInterval(() => {
    //  this.timer++;
    //  this.cdRef.markForCheck();
    // }, 1000);
    this.listenState();
  }

  isRendering() {
    this.render++;
    console.log('Onpush - 1 is rendering');
  }

  changeData() {
    this.data = 'Onpush - 1 - ' + this.render;
  }

  click() {}

  input (input: any) {
    this.stateService.setSubscribe(input.target.value);
  }

  setOutput () {
    this.output++;
  }

  listenState () {
    this.stateService.getSubscribe()
      .subscribe((state: string) => {
        this.stateSubscribe = state;
        this.cdRef.markForCheck();
      });
  }
}
