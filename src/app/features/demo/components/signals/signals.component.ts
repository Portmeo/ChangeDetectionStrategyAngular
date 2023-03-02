import { Component, computed, NgZone, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent {
  count = signal(0);
  doubledCount = computed(() => this.count() * 2);

  constructor(
    private zone: NgZone
  ) {
    setInterval(() => this.count.set(this.count() + 1), 1000);
  }
}
