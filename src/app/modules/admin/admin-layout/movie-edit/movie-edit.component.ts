import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/_core/services/movie.service';
import { log } from 'util';
declare var $;
@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  isSelectImage: boolean;
  breadcrumbData = {
    label: "Quản Lý Phim",
    version: "1.0",
    items: [
      { name: "Quản lý phim", url: "" },
      { name: "Danh sách phim", url: "" },
      { name: "Sửa Phim", url: "" },
    ]
  }
  Movie: any = {
  };
  danhGia = Math.round(Math.random() * 5);
  constructor(private toastr: ToastrService, private activedRoute: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(idMovie => {
      // console.log(idMovie.id) 
      this.getMovieById(idMovie.id);
    })
  }
  getMovieById(id) {
    this.movieService.chiTietPhim(id).subscribe(data => {
      this.Movie = data;
      console.log(data);

      this.Movie.NgayKhoiChieu = this.Movie.NgayKhoiChieu.toString().substr(0, 10);
      // console.log(this.Movie.NgayKhoiChieu);


    })
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
    return true;
  }

  @ViewChild("files") files: any;
  editMovie() {
    console.log(this.files)
    if (this.validate()) {
      //Lấy dữ liệu từ formdata
      let formData = new FormData($("#formEditMovie")[0]);
      formData.append("MaPhim", this.Movie.MaPhim);
      formData.append("MaNhom", "GP06");
      if (this.Movie.DanhGia == null) {
        formData.append("DanhGia", this.danhGia.toString());
      }
      // chuyển formdata thành  object
      let object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      object["HinhAnh"] = "";

      // console.log("****");
      // console.log(object); return;

      if ($('#imgMovie')[0].files.length > 0) {
        if (object["HinhAnh"].trim() === "") {
          object["HinhAnh"] = this.files.nativeElement.files[0].name;
        }
        //upload file to server
        let fileformdata = new FormData();
        fileformdata.append("TenPhim", this.Movie.TenPhim);
        fileformdata.append("Files", $('#imgMovie')[0].files[0]);
        this.movieService.uploadFileAnhPhim(fileformdata).subscribe(data => {

          // upload movie to server
          this.movieService.suaPhim(object).subscribe((data) => {
            // console.log(data);
            if (data.MaPhim) {
              this.toastr.success(`Sửa phim ${data.TenPhim} thành công!`);
              this.router.navigate(['/admin/moviemanage']);
            }
            else {
              this.toastr.error(data);
            }
          })
        })

      } else {
        this.movieService.suaPhim(object).subscribe((data) => {
          // console.log(data);
          if (data.MaPhim) {
            this.toastr.success(`Sửa phim ${data.TenPhim} thành công!`);
            this.router.navigate(['/admin/moviemanage']);
          }
          else {
            this.toastr.error(data);
          }
        })
      }


      //push lên serve
      // this.movieService.suaPhim(object).subscribe((data) => {
      //   // console.log(data);
      //   if (data.MaPhim) {
      //     this.toastr.success(`Sửa phim ${data.TenPhim} thành công!`);
      //     this.router.navigate(['/admin/moviemanage']);
      //   }
      //   else {
      //     this.toastr.error(data);
      //   }
      // })
    }
  }

  onCancel() {
    this.router.navigate(['/admin/moviemanage']);
  }

}
