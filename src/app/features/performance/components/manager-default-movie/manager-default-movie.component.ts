import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-manager-default-movie',
  templateUrl: './manager-default-movie.component.html',
  styleUrls: ['./manager-default-movie.component.scss']
})
export class ManagerDefaultMovieComponent {
  public movies: Movie[] = [];

  constructor (
    private performanceService: PerformanceService
  ) {
    this.getMovies();
  }

  getMovies () {
    this.performanceService.getMoviesDefault()
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  inputChange (event: Event): void {
    const value = (event.target as HTMLInputElement).value;
  }

  trackByItem(index: number, movie: Movie): number {
    return movie.id;
  }

  clickEmpty () {
    this.performanceService.addMovie();
  }
}
