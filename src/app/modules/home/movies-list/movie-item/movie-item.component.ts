import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_core/models/movie';
import { Url } from 'url';
declare var $;
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  currentMovie = {};
  ismouseover: boolean;
  currentUrl: any;
  isShowModal: boolean;
  constructor() { }

  ngOnInit() {
    if (this.movie) {
      this.currentMovie = this.movie;
      // console.log(this.currentMovie);

    }
  }
  playTrailer(Trailer) {
    if (Trailer) {
      this.currentUrl = Trailer;
      $('#modalTrailerMovieList').modal('show');
    } else {
      $('#modalTrailerMovieList').modal('hide');
    }
    if ($('#modalTrailerMovieList').modal('show')) {
      this.isShowModal = true;
    } else {
      this.isShowModal = false;
      this.currentUrl = "";
    }

  }
}
