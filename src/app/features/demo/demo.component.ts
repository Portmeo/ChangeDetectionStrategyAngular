import { AfterViewInit, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user.model';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements AfterViewInit {
  public render = 0;
  public data = 'Data';
  public user: User = {
    name: 'Alex',
    age: 30
  };
  public user$: BehaviorSubject<User> = new BehaviorSubject<User>(this.user)

  constructor (
    readonly stateService: StateService
  ) {  }

  ngAfterViewInit(): void {
    // this.user.age = this.render;
    // this.data = 'Root' + this.render;
  }

  isRendering (): void {
    console.log('Root is rendering');
    this.render++;
  }

  changeData (): void {
    this.data = 'Root - ' + this.render;
    // this.data = 'Root';
    // this.stateService.setAsyncPipe('Root');
  }

  clickEmpty (): void {}

  click (): void {
    this.user.age = this.render;
    // this.user = { ...this.user };
    // this.user$.next(this.user);
  }

  input (input: any): void {
    this.stateService.setAsyncPipe(input.target.value);
  }
}
