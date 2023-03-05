import { ChangeDetectorRef, Component, Input, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/class/base.component';
import { User } from '../../models/user.model';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent extends BaseComponent  {
  public name = 'Default - 1';
  @Input() stateAsyncPipe: string | null = '';
  @Input() user?: User | null;

  constructor (
    stateService: StateService,
    zone: NgZone,
    cdRef: ChangeDetectorRef
  ) {
    super(stateService, zone, cdRef)
  }

  changeData (): void {
    this.data = `${this.name} ${this.render}`;
  }
}
