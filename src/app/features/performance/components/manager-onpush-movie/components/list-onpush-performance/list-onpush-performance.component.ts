import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from 'src/app/features/performance/models/movie.model';

@Component({
  selector: 'app-list-onpush-performance',
  templateUrl: './list-onpush-performance.component.html',
  styleUrls: ['./list-onpush-performance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOnpushPerformanceComponent {
  @Input() movies: Movie[] = [];

  trackByItem(_index: number, movie: Movie): number {
    return movie.id;
  }
}
