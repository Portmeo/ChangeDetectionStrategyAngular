import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/class/base.component';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-default-child',
  templateUrl: './default-child.component.html',
  styleUrls: ['./default-child.component.scss']
})
export class DefaultChildComponent extends BaseComponent {
  constructor (
    stateService: StateService,
    zone: NgZone,
    cdRef: ChangeDetectorRef
  ) {
    super(stateService, zone, cdRef);
    this.name = 'Default -';
  }

  override request (): void {
    this.stateService.onRequest()
      .subscribe((response) => {
        console.log(response);
        this.outputEvent.emit();
      });
  }

  changeData (): void {
    this.data = `${this.name} ${this.child} ${this.cd}`;
  }
}
