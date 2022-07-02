import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {
  @Input() data: string = '';
  count = 0;

  isRendering() {
    this.count++;
    console.log('Child2 is rendering');
  }

  keyup() {}

  changeData() {
    this.data = 'DataChange2'
  }
}
