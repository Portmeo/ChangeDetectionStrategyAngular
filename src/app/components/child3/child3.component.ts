import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class child3Component {
  render = 0;
  @Input() data: string = '';
  @Output() output = new EventEmitter();

  isRendering() {
    this.render++;
    console.log('child - 3 is rendering');
  }

  changeData() {
    this.data = 'Child - 3 - ' + this.render;
  }

  click () {
    this.output.emit();
  }

  input (input: any) {}
}
