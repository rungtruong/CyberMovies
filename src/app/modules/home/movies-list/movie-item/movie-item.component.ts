import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  constructor() { }

  ngOnInit() {
  }

}
