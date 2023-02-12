import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-onpush-child',
  templateUrl: './onpush-child.component.html',
  styleUrls: ['./onpush-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushChildComponent {
  render = 0;
  @Input() child?: string;
  @Input() data: string = '';
  @Output() output = new EventEmitter();

  isRendering() {
    this.render++;
    console.log(`Onpush - ${this.child} is rendering`);
  }

  changeData() {
    this.data = `Onpush - ${this.child} - ${this.render}`;
  }

  click () {
    this.output.emit();
  }

  input (input: any) {}
}
