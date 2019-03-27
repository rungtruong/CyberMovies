import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, OnChanges } from '@angular/core';
import { MovieItemComponent } from './movie-item/movie-item.component';
declare var $;
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, AfterViewInit, OnDestroy {
  viewStatus: boolean = true;

  currentUrl: any;
  isShowModal: boolean;
  @ViewChild(MovieItemComponent) private movieItemComponent: MovieItemComponent;
  constructor() { }

  ngOnInit() {
    $('#modalTrailerMovieList').on('hidden.bs.modal', () => {
      $('#player').each(function (index) {
        $(this).attr('src', null);
        return false;
      });
    });
  }
  ngOnDestroy() {
    $('#modalTrailerMovieList').modal('hide');
  }
  getUrlEvent(event) {
    if (event) {
      this.currentUrl = event;
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
  ngAfterViewInit() {
    $('.modal').on('hidden.bs.modal', () => {
      $('#player').each((index) => {
        $('#player').attr('src', null);
        return false;
      });
    });
  }

}
