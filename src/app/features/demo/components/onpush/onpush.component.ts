import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/class/base.component';
import { User } from '../../models/user.model';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent extends BaseComponent {
  @Input() stateAsyncPipe: string | null  = '';
  @Input() user?: User | null;

  constructor (
    stateService: StateService,
    zone: NgZone,
    cdRef: ChangeDetectorRef
  ) {
    super(stateService, zone, cdRef);
    this.name = 'OnPush - 1';
  }

  changeData (): void {
    this.data = `${this.name} ${this.render}`;
  }
}
