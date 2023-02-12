import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'change-detection';
  data = 'Data';
  render = 0;
  user = {
    name: 'Alex',
    age: 30
  };

  constructor (
    readonly stateService: StateService
  ) {}

  isRendering() {
    this.render++;
    console.log('Parent is rendering');
  }

  changeData() {
    this.data = 'Parent - ' + this.render;
  }

  click() {
    this.user.age = this.render;
    // this.user = { ...this.user };
  }

  input (input: any) {
    this.stateService.setState(input.target.value);
  }
}
