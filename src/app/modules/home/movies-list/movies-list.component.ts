import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  viewStatus: boolean = true;
  constructor() { }
  
  ViewComingSoon(){

  }
  ngOnInit() {
  }

}
