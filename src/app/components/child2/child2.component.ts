import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child2Component {
  render = 0;
  @Input() data: string = '';
  @Input() state: string | null = '';

  isRendering() {
    this.render++;
    console.log('child - 2 is rendering');
  }

  changeData() {
    this.data = 'Child - 2 - ' + this.render;
  }

  click () {}

  keyup () {}
}
