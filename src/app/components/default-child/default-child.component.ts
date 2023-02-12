import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-child',
  templateUrl: './default-child.component.html',
  styleUrls: ['./default-child.component.scss']
})
export class DefaultChildComponent {
  render = 0;
  @Input() child?: string;
  @Input() data: string = '';
  @Output() output = new EventEmitter();

  isRendering() {
    this.render++;
    console.log(`child - ${this.child} is rendering`);
  }

  changeData() {
    this.data = `Child - ${this.child} - ${this.render}`;
  }

  click () {
    this.output.emit();
  }

  input (input: any) {}
}
