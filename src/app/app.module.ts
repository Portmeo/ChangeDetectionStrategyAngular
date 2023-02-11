import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { child1Component } from './child1/child1.component';
import { child2Component } from './child2/child2.component';
import { child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
