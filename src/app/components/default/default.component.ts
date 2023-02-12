import { ChangeDetectorRef, Component, Input } from '@angular/core';
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
  stateSubscribe = '';
  @Input() data: string = '';
  @Input() stateAsyncPipe: string | null = '';
  @Input() user?: any;

  constructor (
    private stateService: StateService,
  ) {
    // setInterval(() => {
    //   this.timer++;
    // }, 1000);
    this.listenState();
  }

  isRendering() {
    this.render++;
    console.log('Default - 2 is rendering');
  }

  changeData() {
    this.data = 'Default - 2 - ' + this.render;
  }

  click () { }

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
        // this.cdRef.markForCheck();
      });
  }
}
