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

  changeData() {
    this.data = 'DataChange'
  }

  keyup() {}

  isRendering() {
    this.count++;
    console.log('Parent is rendering');
  }
}
