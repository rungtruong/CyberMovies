import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-tab-search-movie',
  templateUrl: './tab-search-movie.component.html',
  styleUrls: ['./tab-search-movie.component.scss']
})
export class TabSearchMovieComponent implements OnInit {
  comingsoon = "Phim sắp chiếu";
  movies: any;
  theaters: Array<any> = [];
  dates: Array<any> = [];
  times: Array<any> = [];
  selectmovieDetail: any = {};
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMoVies();
  }
  getMoVies() {
    this.movieService.layDanhSachPhim().subscribe(data => {
      this.movies = data;
    })
  }
  movieDetail(movieCode) {
    this.theaters = [];
    this.dates = [];
    this.movieService.chiTietPhim(movieCode).subscribe(data => {
      this.selectmovieDetail = data;
      if (this.selectmovieDetail.LichChieu != "") {
        let theater = this.selectmovieDetail.LichChieu[0].MaRap;
        let dateTime = this.selectmovieDetail.LichChieu[0].NgayChieuGioChieu;
        for (let i = 0; i < this.selectmovieDetail.LichChieu.length; i++) {
          if (theater != this.selectmovieDetail.LichChieu[i].MaRap) {
            this.theaters.push(this.selectmovieDetail.LichChieu[i]);
          }
          if (dateTime != this.selectmovieDetail.LichChieu[i].NgayChieuGioChieu) {
            this.dates.push(this.selectmovieDetail.LichChieu[i].NgayChieuGioChieu);
          }
        }
        this.theaters.push(this.selectmovieDetail.LichChieu[0]);
        this.dates.push(this.selectmovieDetail.LichChieu[0].NgayChieuGioChieu);
      }
      console.log(this.theaters);
    })
  }
  movieTimeShow(time) {
    this.times = [];
    for (let i = 0; i < this.dates.length; i++) {
      let currentTime = formatDate(this.dates[i], 'H:mm', 'en-US', '+07');
      if (time != currentTime) {
        this.times.push(currentTime);
      }
    }
    this.times.push(time);
    // console.log(this.times);

  }

}
