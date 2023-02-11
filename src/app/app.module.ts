import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { child1Component } from './components/child1/child1.component';
import { child2Component } from './components/child2/child2.component';
import { child3Component } from './components/child3/child3.component';
import { Child4Component } from './components/child4/child4.component';
import { StateService } from './service/state.service';

@NgModule({
  declarations: [
    AppComponent,
    child1Component,
    child2Component,
    child3Component,
    Child4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
