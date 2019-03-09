import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Movie } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  comingSoonMovies: Movie[] = [];
  // Option owl Carousel
  //  mySlideOptions = { items: 1, dots: true, nav: false, autoplay: true, loop: true };
  myCarouselOptions = { items: 4, dots: false, nav: true, autoplay: false, loop: true };
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.layDanhSachPhim().subscribe(data => {
      if (typeof data === "object") {
        for (let i = 8; i < data.length; i++) {
          this.comingSoonMovies = data[i];
        }
      }
    });


  }

}