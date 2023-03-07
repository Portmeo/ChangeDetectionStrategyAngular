import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-manager-onpush-movie',
  templateUrl: './manager-onpush-movie.component.html',
  styleUrls: ['./manager-onpush-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerOnpushMovieComponent {

  public movies$: Observable<Movie[]> = this.performanceService.getMoviesOnPush();

  constructor (
    private performanceService: PerformanceService
  ) {}

  inputChange (event: Event): void {
    const value = (event.target as HTMLInputElement).value;
  }

  clickEmpty () {
    this.performanceService.addMovie('onpush');
  }
}
