import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child1Component {
  count = 0;
  @Input() data: string = '';

  isRendering() {
    this.count++;
    console.log('child1 is rendering');
  }

  changeData() {
    this.data = 'Child1'
  }

  keyup() {}

}
