import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { PerformanceService } from './services/performance.service';
import { ListOnpushPerformanceComponent } from './components/manager-onpush-movie/components/list-onpush-performance/list-onpush-performance.component';
import { ManagerOnpushMovieComponent } from './components/manager-onpush-movie/manager-onpush-movie.component';
import { ManagerDefaultMovieComponent } from './components/manager-default-movie/manager-default-movie.component';



@NgModule({
  declarations: [
    PerformanceComponent,
    ListOnpushPerformanceComponent,
    ManagerOnpushMovieComponent,
    ManagerDefaultMovieComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule
  ],
  providers: [
    PerformanceService
  ]
})
export class PerformanceModule { }
