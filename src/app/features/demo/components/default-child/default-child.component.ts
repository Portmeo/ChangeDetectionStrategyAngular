import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-default-child',
  templateUrl: './default-child.component.html',
  styleUrls: ['./default-child.component.scss']
})
export class DefaultChildComponent {

  public render = 0;
  @Input() child?: string;
  @Input() data: string = '';
  @Output() output = new EventEmitter();

  constructor (
    private http: HttpClient
  ) { }

  isRendering (): void {
    console.log(`Default - ${this.child} is rendering`);
    this.render++;
  }

  request (): void {
    this.http.get<any>(environment.urlApi)
      .subscribe((response) => {
        console.log(response);
        this.output.emit();
      });
  }

  changeData (): void {
    this.data = `Default - ${this.child} - ${this.render}`;
  }

  mouseEvent (): void {
    this.output.emit();
  }

  input (input: any): void {}
}
