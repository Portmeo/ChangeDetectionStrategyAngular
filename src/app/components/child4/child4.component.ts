import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss']
})
export class Child4Component {
  render = 0;
  @Input() data: string = '';
  @Output() output = new EventEmitter();

  isRendering() {
    this.render++;
    console.log('Child - 4 is rendering');
  }

  changeData() {
    this.data = 'Child - 4 - ' + this.render;
  }

  click () {
    this.output.emit();
  }

  input (input: any) {}
}
