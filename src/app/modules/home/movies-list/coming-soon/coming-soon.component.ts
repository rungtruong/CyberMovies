import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Movie } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit, OnDestroy {

  comingSoonMovies: Movie[] = [];
  // Option owl Carousel
  //  mySlideOptions = { items: 1, dots: true, nav: false, autoplay: true, loop: true };
  myCarouselOptions = {
    items: 5, dots: false, nav: true, autoplay: true, loop: true,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 960: { items: 4 }, 1200: { items: 5 } }

  };
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
      if (typeof data === "object") {
        for (let i = 0; i < data.length; i++) {
          if (data[i].DanhGia === 0 || data[i].DanhGia === null) {
            this.comingSoonMovies.push(data[i]);
          }
        }
        // console.log(this.comingSoonMovies);
      }
    });
  }
  getUrlEvent(event) {
    this.urltoMovieList.emit(event);
  }

}
