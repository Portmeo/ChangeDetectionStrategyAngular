import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DefaultComponent } from './components/default/default.component';
import { OnpushComponent } from './components/onpush/onpush.component';
import { DefaultChildComponent } from './components/default-child/default-child.component';
import { OnpushChildComponent } from './components/onpush-child/onpush-child.component';
import { StateService } from './services/state.service';
import { DemoRoutingModule } from './demo-routing.module';
import { SignalsComponent } from './components/signals/signals.component';
import { BehaviorCdComponent } from './components/behavior-cd/behavior-cd.component';

@NgModule({
  declarations: [
    DemoComponent,
    DefaultComponent,
    OnpushComponent,
    DefaultChildComponent,
    OnpushChildComponent,
    SignalsComponent,
    BehaviorCdComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StateService
  ],
})
export class DemoModule { }
