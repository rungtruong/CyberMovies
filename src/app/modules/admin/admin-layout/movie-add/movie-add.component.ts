import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/_core/services/movie.service';
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
    "MaNhom": "GP06",
    "DanhGia": Math.round(Math.random() * 5),
  };
  constructor(private toastr: ToastrService, private activedRoute: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.Movie.NgayKhoiChieu = new Date().toISOString().substr(0, 10);
    // console.log(this.Movie.NgayKhoiChieu);
  }

  showdate(date) {
    console.log(date);

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
    if ($('#imgMovie')[0].files.length == 0) {
      this.toastr.error("Bạn chưa chọn hình ảnh!");
      return false;
    }
    if (!this.Movie.Trailer) {
      this.toastr.error("Bạn chưa nhập link trailer phim!");
      return false;
    }
    return true;
  }
  @ViewChild("files") files: any;
  addMovie() {
    // console.log(this.files)
    if (this.validate()) {
      let formData = new FormData($("#formAddMovie")[0]);
      formData.append("MaNhom", "GP06");
      formData.append("DanhGia", this.Movie.DanhGia);
      let objectMovie = {};
      formData.forEach(function (value, key) {
        objectMovie[key] = value;
      });
      objectMovie["HinhAnh"] = "";




      if ($('#imgMovie')[0].files.length > 0) {
        if (objectMovie["HinhAnh"].trim() === "") {
          objectMovie["HinhAnh"] = this.files.nativeElement.files[0].name;
        }
        //upload file to server
        let fileformdata = new FormData();
        fileformdata.append("TenPhim", this.Movie.TenPhim);
        fileformdata.append("Files", $('#imgMovie')[0].files[0]);
        this.movieService.uploadFileAnhPhim(fileformdata).subscribe(data => {

          // upload movie to server
          this.movieService.themPhim(objectMovie).subscribe((data) => {
            if (typeof data === "object") {
              this.toastr.success(`Thêm phim ${data.TenPhim} thành công!`);
              this.router.navigate(['/admin/moviemanage']);
            } else this.toastr.error(data);
          })
        })

      } else {
        this.movieService.themPhim(objectMovie).subscribe((data) => {
          if (typeof data === "object") {
            this.toastr.success(`Thêm phim ${data.TenPhim} thành công!`);
            this.router.navigate(['/admin/moviemanage']);
          } else this.toastr.error(data);
        })
      }





    }
  }
  onCancel() {
    this.router.navigate(['/admin/moviemanage']);
  }
}
