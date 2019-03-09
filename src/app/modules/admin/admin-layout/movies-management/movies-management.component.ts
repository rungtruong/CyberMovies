import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Movie } from 'src/app/_core/models/movie';
declare var $;
@Component({
  selector: 'app-movies-management',
  templateUrl: './movies-management.component.html',
  styleUrls: ['./movies-management.component.scss']
})
export class MoviesManagementComponent implements OnInit {
  movieArray: Movie[] = [];
  breadcrumbData = {
    label: "Quản Lý Phim",
    version: "1.0",
    items: [
      { name: "Quản lý phim", url: "" },
      { name: "Danh sách phim", url: "" }
    ]
  }
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.layDanhSachPhim().subscribe((data) => {
      console.log(data);
      this.movieArray=data;      
    })
  }

}
