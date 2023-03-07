import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable()
export class PerformanceService {

  private moviesDefault$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  private moviesOnpush$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor (
    private http: HttpClient
  ) {
    this.getMovies();
  }

  setMovies (movies: Movie[], strategy: string = ''):void {
    if (!strategy) {
      this.moviesDefault$.next(movies);
    } else {
      this.moviesOnpush$.next(movies);
    }
  }

  addMovie (strategy: string = ''): void {
    let movies = this.moviesOnpush$.getValue();
    const newMovie = movies[0];
    newMovie.id = movies.length + newMovie.id;
    newMovie.title = `${newMovie.title} ${movies.length}`;
    // const { title, id, ...movie} = movies[0];
    // const newMovie = { title: `${title} ${movies.length}`, id: movies.length + id, ...movie };
    // movies = [...movies, newMovie];
    movies.push(newMovie)
    this.setMovies(movies, strategy);
  }

  getMoviesDefault (): Observable<Movie[]> {
    return this.moviesDefault$.asObservable();
  }

  getMoviesOnPush (): Observable<Movie[]> {
    return this.moviesOnpush$.asObservable();
  }

  async getMovies (): Promise<void> {
    const movies = await lastValueFrom(this.http.get<Movie[]>(environment.urlApi.movie));
    this.moviesDefault$.next(JSON.parse(JSON.stringify(movies)));
    this.moviesOnpush$.next(JSON.parse(JSON.stringify(movies)));
  }
}
