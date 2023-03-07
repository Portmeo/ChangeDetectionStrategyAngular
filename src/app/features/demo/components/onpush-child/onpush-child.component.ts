import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/class/base.component';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-onpush-child',
  templateUrl: './onpush-child.component.html',
  styleUrls: ['./onpush-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushChildComponent extends BaseComponent  {

  constructor (
    stateService: StateService,
    zone: NgZone,
    cdRef: ChangeDetectorRef
  ) {
    super(stateService, zone, cdRef);
    this.name = 'OnPush -';
  }

  override request (): void {
    this.stateService.onRequest()
      .subscribe((response) => {
        console.log(response);
        this.outputEvent.emit(response[0].title);
      });
  }

  changeData(): void {
    this.data = `${this.name} ${this.child} ${this.cd}`;
  }

}

