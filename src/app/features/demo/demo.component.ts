import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { BaseComponent } from 'src/app/class/base.component';
import { User } from './models/user.model';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent extends BaseComponent {
  public user: User = {
    name: 'Alex',
    age: 30
  };

  public user$: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

  constructor (
    stateService: StateService,
    zone: NgZone,
    cdRef: ChangeDetectorRef
  ) {
    super(stateService, zone, cdRef);
    this.name = 'Root';
    // this.user$
    // .pipe(tap((user) => console.log(user)))
    // .subscribe(() => {})
  }

  changeData (): void {
    // this.data = this.name;
    this.data = `${this.name} - ${this.render}`;
  }

  changeObject (): void {
    this.user.age = this.render;
    // this.user = { ...this.user };
    this.user$.next(this.user);
  }

  inputAsyncPipe (input: any): void {
    this.stateService.setAsyncPipe(input.target.value);
  }
}
