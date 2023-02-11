import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child4Component {
  count = 0;
  state = '';
  @Input() data: string = '';

  constructor (
    private stateService: StateService,
    private cdRef: ChangeDetectorRef
  ) {
    this.listenState();
  }

  isRendering() {
    this.count++;
    console.log('Child4 is rendering');
  }

  changeData() {
    this.data = 'Child4'
  }

  listenState () {
    this.stateService.getState()
      .subscribe((state: string) => {
        this.state = state;
        // this.cdRef.markForCheck();
      });
  }

  keyup() {}
}
