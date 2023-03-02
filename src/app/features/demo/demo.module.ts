import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo.component';
import { DefaultComponent } from './components/default/default.component';
import { OnpushComponent } from './components/onpush/onpush.component';
import { DefaultChildComponent } from './components/default-child/default-child.component';
import { OnpushChildComponent } from './components/onpush-child/onpush-child.component';
import { StateService } from './service/state.service';
import { DemoRoutingModule } from './demo-routing.module';
import { TriggerCdComponent } from './components/trigger-cd/trigger-cd.component';
import { SignalsComponent } from './components/signals/signals.component';

@NgModule({
  declarations: [
    DemoComponent,
    DefaultComponent,
    OnpushComponent,
    DefaultChildComponent,
    OnpushChildComponent,
    TriggerCdComponent,
    SignalsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StateService
  ],
})
export class DemoModule { }
