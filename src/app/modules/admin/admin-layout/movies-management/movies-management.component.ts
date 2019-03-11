import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Movie } from 'src/app/_core/models/movie';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
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

  idMovie: number;
  constructor(private toastr: ToastrService, private activedRoute: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.movieService.layDanhSachPhim().subscribe((data) => {
      this.movieArray = data;
      console.log(this.movieArray);
    })
  }

  deleteMovie(id, name) {
    console.log(id);
    this.movieService.xoaPhim(id).subscribe(data => {
      console.log(data);
      if (data === "Xóa phim thành công!") {
        this.toastr.success(`Xóa phim ${name} thành công!`);
        this.getMovies();        
      }
    })

  }

}
