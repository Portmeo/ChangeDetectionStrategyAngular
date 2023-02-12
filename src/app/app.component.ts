import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  render = 0;
  data = 'Data';
  user = {
    name: 'Alex',
    age: 30
  };

  constructor (
    readonly stateService: StateService,
    private cdRef: ChangeDetectorRef
  ) {}

  isRendering() {
    this.render++;
    console.log('Parent is rendering');
  }

  changeData() {
    this.data = 'Parent - ' + this.render;
    // this.data = 'Parent';
  }

  click() {
    this.user.age = this.render;
    // this.user = { ...this.user };
  }

  input (input: any) {
    this.stateService.setAsyncPipe(input.target.value);
  }
}
