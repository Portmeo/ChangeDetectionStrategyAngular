import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { child1Component } from './child1/child1.component';
import { child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    child1Component,
    child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
