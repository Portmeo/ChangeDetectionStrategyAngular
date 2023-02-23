import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-child',
  templateUrl: './default-child.component.html',
  styleUrls: ['./default-child.component.scss']
})
export class DefaultChildComponent {
  public render = 0;
  @Input() child?: string;
  @Input() data: string = '';
  @Output() output = new EventEmitter();

  isRendering (): void {
    this.render++;
    console.log(`Default - ${this.child} is rendering`);
  }

  changeData (): void {
    this.data = `Default - ${this.child} - ${this.render}`;
  }

  mouseEvent (): void {
    this.output.emit();
  }

  input (input: any): void {}
}
