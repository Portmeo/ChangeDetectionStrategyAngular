import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'change-detection';
  data = 'Data';
  count = 0;
  user = {
    name: 'Alex',
    age: 30
  };

  constructor (
    readonly stateService: StateService
  ) {}

  isRendering() {
    this.count++;
    console.log('Parent is rendering');
  }

  changeData() {
    this.data = 'Parent - ' + this.count;
  }

  click() {
    this.user.age = this.count;
  }

  input (input: any) {
    this.stateService.setState(input.target.value);
  }
}
