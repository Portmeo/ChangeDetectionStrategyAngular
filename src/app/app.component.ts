import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'change-detection';
  data = 'Data';
  count = 0;

  isRendering() {
    this.count++;
    console.log('Parent is rendering');
  }

  changeData() {
    this.data = 'Parent'
  }

  click() {}

  keyup() {}
}
