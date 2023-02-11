import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child3Component {
  @Input() data: string = '';
  count = 0;
  backgroundColor = true;

  isRendering() {
    this.count++;
    console.log('child3 is rendering');
  }

  changeData() {
    this.data = 'Child3'
  }

  click() {}

  keyup() {}
}
