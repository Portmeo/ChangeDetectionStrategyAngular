import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child4Component {
  render = 0;
  @Input() data: string = '';

  isRendering() {
    this.render++;
    console.log('Child - 4 is rendering');
  }

  changeData() {
    this.data = 'Child - 4 - ' + this.render;
  }

  keyup() {}
}
