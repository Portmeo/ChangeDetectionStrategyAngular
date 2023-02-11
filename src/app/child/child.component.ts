import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data: string = '';
  count = 0;

  isRendering() {
    this.count++;
    console.log('Child is rendering');
  }

  changeData() {
    this.data = 'Child'
  }

  click() {}

  keyup() {}
}
