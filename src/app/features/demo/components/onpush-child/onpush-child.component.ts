import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-onpush-child',
  templateUrl: './onpush-child.component.html',
  styleUrls: ['./onpush-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushChildComponent {
  public render = 0;
  @Input() child?: string;
  @Input() data: string = '';
  @Output() output = new EventEmitter();

  constructor(
    private stateService: StateService
  ) {
    // this.initSubscription();
  }

  isRendering(): void {
    console.log(`Onpush - ${this.child} is rendering`);
    this.render++;
  }

  changeData(): void {
    this.data = `Onpush - ${this.child} - ${this.render}`;
  }

  mouseEvent(): void {
    this.output.emit();
  }

  input(input: any): void { }

  initSubscription(): void {
    this.stateService.getSubscribe()
      .subscribe(() => {
        // this.output.emit();
      });
  }
}

