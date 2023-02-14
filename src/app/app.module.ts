import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnpushComponent } from './components/onpush/onpush.component';
import { DefaultComponent } from './components/default/default.component';
import { OnpushChildComponent } from './components/onpush-child/onpush-child.component';
import { DefaultChildComponent } from './components/default-child/default-child.component';
import { StateService } from './service/state.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OnpushComponent,
    DefaultComponent,
    OnpushChildComponent,
    DefaultChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
