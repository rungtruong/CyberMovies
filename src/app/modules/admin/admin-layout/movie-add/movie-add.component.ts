import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {
  breadcrumbData = {
    label: "Quản Lý Phim",
    version: "1.0",
    items: [
      { name: "Quản lý phim", url: "" },
      { name: "Danh sách phim", url: "" },
      { name: "Thêm Phim", url: "" },
    ]
  }
  Movie: any = {
    "MaNhom": "GP06"
  };
  constructor(private toastr: ToastrService, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }
  validate() {
    if (!this.Movie.MaPhim) {
      this.toastr.error("Bạn chưa nhập mã phim!");
      return false;
    }
    if (!this.Movie.TenPhim) {
      this.toastr.error("Bạn chưa nhập tên phim!");
      return false;
    }
    if (!this.Movie.NgayKhoiChieu) {
      this.toastr.error("Bạn chưa nhập ngày khỏi chiếu!");
      return false;
    }
    if (!this.Movie.MoTa) {
      this.toastr.error("Bạn chưa nhập mô tả về phim!");
      return false;
    }
    if (!this.Movie.Trailer) {
      this.toastr.error("Bạn chưa nhập link trailer phim!");
      return false;
    }
  }
  addMovie() {
    this.validate();
    let formData = new FormData($("#formAddMovie")[0]);
    console.log("****");
    console.log(formData.get("NgayKhoiChieu"));
    
    



  }

}
