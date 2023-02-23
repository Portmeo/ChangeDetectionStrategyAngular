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
    readonly stateService: StateService,
    private cdRef: ChangeDetectorRef
  ) {}

  isRendering (): void {
    console.log('Parent is rendering');
    this.render++;
  }

  changeData (): void {
    this.data = 'Parent - ' + this.render;
    // this.data = 'Parent';
  }

  click (): void {
    this.user.age = this.render;
    // this.user = { ...this.user };
  }

  input (input: any): void {
    this.stateService.setAsyncPipe(input.target.value);
  }
}