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
  currentMovie = {};
  ismouseover: boolean;
  
  constructor() { }

  ngOnInit() {
    if (this.movie) {
      this.currentMovie = this.movie;
      // console.log(this.currentMovie);

    }
  }
  playTrailer(Trailer) {    
    this.urltoShowNowing.emit(Trailer);
  }
}
