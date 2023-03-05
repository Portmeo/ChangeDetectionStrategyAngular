import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    private http: HttpClient,
  ) { }

  isRendering(): void {
    console.log(`Onpush - ${this.child} is rendering`);
    this.render++;
  }

  request (): void {
    this.http.get<any>(environment.urlApi)
      .subscribe((response) => {
        console.log(response);
        this.output.emit();
      });
  }

  changeData(): void {
    this.data = `Onpush - ${this.child} - ${this.render}`;
  }

  mouseEvent(): void {
    this.output.emit();
  }

  input(input: any): void { }
}

