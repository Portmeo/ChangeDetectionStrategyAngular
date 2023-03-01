import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from './models/user.model';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  public render = 0;
  public data = 'Data';
  public user: User = {
    name: 'Alex',
    age: 30
  };

  constructor (
    readonly stateService: StateService
  ) {}

  isRendering (): void {
    console.log('Parent is rendering');
    this.render++;
  }

  changeData (): void {
    this.blockEvents(10);
    this.data = 'Parent - ' + this.render;
    // this.data = 'Parent';
  }

  clickEmpty (): void {}

  click (): void {
    this.blockEvents(10);
    this.user.age = this.render;
    // this.user = { ...this.user };
  }

  input (input: any): void {
    this.stateService.setAsyncPipe(input.target.value);
  }

  blockEvents (baseNumber: number) {
    let result = 0;
    for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
  }
}
