import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class child2Component {
  render = 0;
  output = 0;
  stateSubscribe = '';
  @Input() data: string = '';
  @Input() stateAsyncPipe: string | null = '';
  @Input() user?: any;

  constructor (
    private stateService: StateService,
  ) {
    this.listenState();
  }

  isRendering() {
    this.render++;
    console.log('child - 2 is rendering');
  }

  changeData() {
    this.data = 'Child - 2 - ' + this.render;
  }

  click () { }

  input (input: any) {
    this.stateService.setState(input.target.value);
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
