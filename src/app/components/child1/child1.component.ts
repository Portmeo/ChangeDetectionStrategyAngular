import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child1Component {
  count = 0;
  state = '';

  @Input() data: string = '';
  @Input() user?: any;

  constructor (
    private stateService: StateService,
    private cdRef: ChangeDetectorRef
  ) {
    this.listenState();
  }

  isRendering() {
    this.count++;
    console.log('child - 1 is rendering');
  }

  changeData() {
    this.data = 'Child - 1 - ' + this.count;
  }

  keyup() {}


  click() { }

  listenState () {
    this.stateService.getState()
      .subscribe((state: string) => {
        this.state = state;
        this.cdRef.markForCheck();
      });
  }

}
