import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() urltoShowNowing = new EventEmitter;
  currentMovie: any = {};
  ismouseover: boolean;
  stars: Array<any> = [];
  stars_o: Array<any> = [];
  constructor() { }

  ngOnInit() {
    if (this.movie) {
      this.currentMovie = this.movie;
      // console.log(this.currentMovie);
      this.renderStar(this.currentMovie.DanhGia);
    }
  }
  playTrailer(Trailer) {
    this.urltoShowNowing.emit(Trailer);
  }

  renderStar(star: number) {
    for (let i = 0; i < star; i++) {
      this.stars.push(i);
    }
    for (let i = 0; i < 5 - star; i++) {
      this.stars_o.push(i);
    }
  }
}
