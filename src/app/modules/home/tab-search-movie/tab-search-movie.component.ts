import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/_core/services/ticket.service';
@Component({
  selector: 'app-tab-search-movie',
  templateUrl: './tab-search-movie.component.html',
  styleUrls: ['./tab-search-movie.component.scss']
})
export class TabSearchMovieComponent implements OnInit, OnDestroy {
  comingsoon = "Phim sắp chiếu";
  movies: any;
  selectMovie: any;
  selectTheater: any;
  selectDateShow: any;
  selectTimeShow: any;
  selectCodeShow: any;
  theaters: Array<any> = [];
  dates: Array<any> = [];
  times: Array<any> = [];
  selectmovieDetail: any = {};
  requestGetMovies: any;
  constructor(private router: Router, private movieService: MovieService, private ticketService: TicketService) { }

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
    this.selectMovie = movieCode;
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
    this.selectDateShow = time;
    time = formatDate(time, 'H:mm', 'en-US', '+07');
    this.times = [];
    for (let i = 0; i < this.dates.length; i++) {
      let currentTime = formatDate(this.dates[i], 'H:mm', 'en-US', '+07');
      if (time != currentTime) {
        this.times.push(currentTime);
      }
    }
    this.times.push(time);
    this.getTicketDetailByDate();
  }
  chooseTheater(theater) {
    this.selectTheater = theater;
  }
  chooseTimeShow(timeshow) {
    this.selectTimeShow = timeshow;
  }
  validate() {
    if (!localStorage.getItem("userLogin")) {
      Swal.fire("Thông báo", "Vui lòng đăng nhập trước khi đặt vé", "warning");
      return false;
    }
    if (!this.selectMovie) {
      Swal.fire('Thông báo', 'Bạn chưa chọn phim muốn xem!', 'warning');
      return false;
    }
    if (this.theaters.length === 0) {
      Swal.fire('Thông báo', 'Phim sắp chiếu, mời bạn chọn phim khác!', 'warning');
      return false;
    } else {
      if (!this.selectTheater) {
        Swal.fire('Thông báo', 'Bạn chưa chọn rạp!', 'warning');
        return false;
      }
    }
    if (!this.selectDateShow) {
      Swal.fire('Thông báo', 'Bạn chưa chọn ngày xem!', 'warning');
      return false;
    }
    if (!this.selectTimeShow) {
      Swal.fire('Thông báo', 'Bạn chưa chọn xuất chiếu!', 'warning');
      return false;
    }
    return true;
  }
  getTicketDetailByDate() {
    for (let i = 0; i < this.selectmovieDetail.LichChieu.length; i++) {
      if (this.selectDateShow == this.selectmovieDetail.LichChieu[i].NgayChieuGioChieu) {
        this.selectCodeShow = this.selectmovieDetail.LichChieu[i].MaLichChieu;
      }
    }
  }
  muaVe() {
    // console.log(this.theaters);
    if (this.validate()) {
      let params = {
        MaLichChieu: this.selectCodeShow,
        MaPhim: this.selectMovie,
        TenRap: this.selectTheater,
        NgayChieuGioChieu: this.selectDateShow,
      }
      console.log(params);

      this.router.navigate(['/bookticket'], { queryParams: params });
    }
  }
}
