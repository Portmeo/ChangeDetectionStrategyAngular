import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child4Component {
  @Input() data: string = '';
  count = 0;

  isRendering() {
    this.count++;
    console.log('Child4 is rendering');
  }

  changeData() {
    this.data = 'Child4'
  }

  click() {}

  keyup() {}
}
