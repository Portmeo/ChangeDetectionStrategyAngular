import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnChanges, Output, SimpleChanges } from '@angular/core';
import { StateService } from '../features/demo/services/state.service';

@Component({
  selector: '',
  template: '',
})
export class BaseComponent implements AfterViewInit, OnChanges {
  name = '';
  cd = 0;
  output = 0;
  timer = 0;
  interval?: any;

  @Input() data: string = '';
  @Input() child: string = '';
  @Output() outputEvent = new EventEmitter();

  constructor (
    readonly stateService: StateService,
    readonly zone: NgZone,
    readonly cdRef: ChangeDetectorRef
  ) {  }

  ngOnChanges(_changes: SimpleChanges): void {
    // console.log(`ONCHANGE -- ${this.name} ${this.child} ${this.data}`);
  }

  ngAfterViewInit(): void {
    // console.log(`AFTER_VIEW_INIT -- ${this.name} ${this.child} ${this.data}`);
  }

  changeDetection (name: string): void {
    console.log(`${name} is change detection`);
    this.cd += 1;
  }

  setOutput (): void {
    this.output += 1;
  }

  initTimer (): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.timer += 1;
        // this.cdRef.detectChanges();
        // this.cdRef.markForCheck();
      }, 1000);
    }
    // this.zone.runOutsideAngular(() => {
    //   if (!this.interval) {
    //     this.interval = setInterval(() => {
    //       this.timer += 1;
    //       this.timer % 5 == 0 && this.cdRef.detectChanges();
    //     }, 1000);
    //   }
    // });
  }

  clearTimer (): void {
    clearInterval(this.interval);
    this.interval = null;
  }

  promises (): void {
    this.stateService.onPromise().then(() => console.log('Promise resolve'));
  }

  request (): void {
    this.stateService.onRequest()
      .subscribe(console.log);
  }

  clickEmpty (): void { }

  inputEmpty (_input: Event): void { }
}
