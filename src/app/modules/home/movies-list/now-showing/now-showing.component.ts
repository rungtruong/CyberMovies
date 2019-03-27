import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Movie } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
  styleUrls: ['./now-showing.component.scss']
})
export class NowShowingComponent implements OnInit, OnDestroy {
  nowShowingMovies: Movie[] = [];
  // Option owl Carousel
  //  mySlideOptions = { items: 1, dots: true, nav: false, autoplay: true, loop: true };
  myCarouselOptions = { items: 4, dots: false, nav: true, autoplay: false, loop: true };

  requestGetMovies: any;

  @Output() urltoMovieList = new EventEmitter;
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
      for (let i = 0; i < data.length; i++) {
        if (data[i].DanhGia != 0 && data[i].DanhGia != null) {
          this.nowShowingMovies.push(data[i]);
        }
      }
      console.log(this.nowShowingMovies);

    });
  }
  getUrlEvent(event) {
    this.urltoMovieList.emit(event);
  }
}
