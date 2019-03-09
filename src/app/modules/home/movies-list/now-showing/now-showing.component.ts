import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Movie } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
  styleUrls: ['./now-showing.component.scss']
})
export class NowShowingComponent implements OnInit {
  nowShowingMovies: Movie[] = [];
  // Option owl Carousel
  //  mySlideOptions = { items: 1, dots: true, nav: false, autoplay: true, loop: true };
  myCarouselOptions = { items: 4, dots: false, nav: true, autoplay: false, loop: true };
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.layDanhSachPhim().subscribe(data => {
      this.nowShowingMovies = data
      // console.log(this.Movies);
      this.nowShowingMovies.splice(8);
      // console.log("*****");
      // console.log(this.Movies);
    });
   

  }

}
