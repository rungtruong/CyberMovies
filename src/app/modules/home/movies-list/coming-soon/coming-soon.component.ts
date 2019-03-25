import { Component, OnInit, OnDestroy } from '@angular/core';
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
  myCarouselOptions = { items: 4, dots: false, nav: true, autoplay: false, loop: true };
  requestGetMovies: any
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
        for (let i = 8; i < 16; i++) {
          this.comingSoonMovies.push(data[i]);
        }
      }
    });
  }

}
