import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab-search-movie',
  templateUrl: './tab-search-movie.component.html',
  styleUrls: ['./tab-search-movie.component.scss']
})
export class TabSearchMovieComponent implements OnInit, OnDestroy {
  comingsoon = "Phim sắp chiếu";
  movies: any;
  theaters: Array<any> = [];
  dates: Array<any> = [];
  times: Array<any> = [];
  selectmovieDetail: any = {};
  requestGetMovies: any;
  constructor(private router:Router,private movieService: MovieService) { }

  ngOnInit() {
    this.getMoVies();
  }
  ngOnDestroy() {
    if (this.requestGetMovies) {
      this.requestGetMovies.unsubscribe();
    }
  }
  getMoVies() {
    this.requestGetMovies = this.movieService.layDanhSachPhim().subscribe(data => {
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
    
    });

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
    
  }
  
  muaVe(){
    console.log(this.theaters);
    if(this.times.length === 0)
    {
      Swal.fire('Thông báo','Bạn chưa chọn xuất chiếu','warning');
      return;
    }
    if(this.theaters.length === 0 )
    {
      Swal.fire('Thông báo','Phim chưa chiếu','warning');
      return;

    }else{
    
      let params = {
        MaLichChieu: this.theaters[0].MaLichChieu,
        MaPhim: this.theaters[0].MaPhim,
        TenRap:this.theaters[0].Rap.TenRap,
        NgayChieuGioChieu:this.theaters[0].NgayChieuGioChieu
      }
      this.router.navigate(['/bookticket'],{queryParams:params});
    }
  }
}
