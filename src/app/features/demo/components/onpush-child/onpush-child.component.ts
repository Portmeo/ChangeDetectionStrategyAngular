import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/class/base.component';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-onpush-child',
  templateUrl: './onpush-child.component.html',
  styleUrls: ['./onpush-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushChildComponent extends BaseComponent  {
  public name = 'OnPush -';

  constructor (
    stateService: StateService,
    zone: NgZone,
    cdRef: ChangeDetectorRef
  ) {
    super(stateService, zone, cdRef)
  }

  override request (): void {
    this.stateService.getRequest()
      .subscribe((response) => {
        console.log(response);
        this.outputEvent.emit();
      });
  }

  changeData(): void {
    this.data = `${this.name} ${this.child} ${this.render}`;
  }

}

