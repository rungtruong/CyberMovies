import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-tab-search-movie',
  templateUrl: './tab-search-movie.component.html',
  styleUrls: ['./tab-search-movie.component.scss']
})
export class TabSearchMovieComponent implements OnInit {
  movies: any;
  selectmovieDetail: any = {};
  movieCode: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMoVies();
  }
  getMoVies() {
    this.movieService.layDanhSachPhim().subscribe(data => {
      this.movies = data;
    })
  }
  movieDetail() {
    this.movieService.chiTietPhim(this.movieCode).subscribe(data => {
      this.selectmovieDetail = data;
      console.log(this.selectmovieDetail);
    })
  }

}
