import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  currentMovie = {

  };
  ismouseover: boolean;
  constructor() { }

  ngOnInit() {
    if (this.movie) {
      this.currentMovie = this.movie;
      // console.log(this.currentMovie);
      
    }
  }

}
