import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-movie-list-template',
  templateUrl: './movie-list-template.component.html',
  styleUrls: ['./movie-list-template.component.scss']
})
export class MovieListTemplateComponent implements OnInit, OnDestroy {
  requestGetMovies: any;
  Movies: any = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }
  ngOnDestroy() {
    if (this.requestGetMovies) {
      this.requestGetMovies.unsubscribe();
    }
  }
  getMovies() {
    this.requestGetMovies = this.movieService.layDanhSachPhim().subscribe(data => {
      this.Movies = data;
    });
  }
}
