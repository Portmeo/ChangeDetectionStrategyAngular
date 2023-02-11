import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child3Component {
  count = 0;
  @Input() data: string = '';

  isRendering() {
    this.count++;
    console.log('child3 is rendering');
  }

  changeData() {
    this.data = 'Child3'
  }

  keyup() {}
}
