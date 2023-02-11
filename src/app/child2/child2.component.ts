import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child2Component {
  @Input() data: string = '';
  count = 0;

  isRendering() {
    this.count++;
    console.log('child2 is rendering');
  }

  changeData() {
    this.data = 'Child2'
  }

  click() {}

  keyup() {}
}
