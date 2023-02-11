import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child2Component {
  count = 0;
  @Input() data: string = '';
  @Input() state: string | null = '';

  isRendering() {
    this.count++;
    console.log('child2 is rendering');
  }

  changeData() {
    this.data = 'Child2'
  }

  keyup() {}
}
