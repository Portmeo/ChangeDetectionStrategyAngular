import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child1Component {
  render = 0;
  output = 0;
  stateSubscribe = '';
  @Input() data: string = '';
  @Input() stateAsyncPipe: string | null = '';
  @Input() user?: any;

  constructor (
    private stateService: StateService
  ) {
    this.listenState();
  }

  isRendering() {
    this.render++;
    console.log('child - 1 is rendering');
  }

  changeData() {
    this.data = 'Child - 1 - ' + this.render;
  }

  click() {}

  input (input: any) {
    // this.stateService.setState(input.target.value);
  }

  setOutput () {
    this.output++;
  }

  listenState () {
    this.stateService.getState()
      .subscribe((state: string) => {
        this.stateSubscribe = state;
        // this.cdRef.markForCheck();
      });
  }
}
