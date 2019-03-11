import { Component, OnInit } from '@angular/core';
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
  lichChieu: any = [
    {
      "MaLichChieu": 836,
      "MaRap": 346,
      "MaPhim": 136,
      "NgayChieuGioChieu": "2018-08-01T14:50:00",
      "GiaVe": 75000,
      "ThoiLuong": 120,
      "MaNhom": "GP06",
      "Rap": {
        "MaRap": 346,
        "TenRap": "Rạp 2",
        "SoGhe": 60,
        "MaNhom": "GP06"
      }
    },
    {
      "MaLichChieu": 1661,
      "MaRap": 346,
      "MaPhim": 136,
      "NgayChieuGioChieu": "2018-08-02T14:50:00",
      "GiaVe": 75000,
      "ThoiLuong": 120,
      "MaNhom": "GP06",
      "Rap": {
        "MaRap": 346,
        "TenRap": "Rạp 2",
        "SoGhe": 60,
        "MaNhom": "GP06"
      }
    },
    {
      "MaLichChieu": 1662,
      "MaRap": 346,
      "MaPhim": 136,
      "NgayChieuGioChieu": "2018-08-03T14:50:00",
      "GiaVe": 75000,
      "ThoiLuong": 120,
      "MaNhom": "GP06",
      "Rap": {
        "MaRap": 346,
        "TenRap": "Rạp 2",
        "SoGhe": 60,
        "MaNhom": "GP06"
      }
    },
    {
      "MaLichChieu": 1663,
      "MaRap": 346,
      "MaPhim": 136,
      "NgayChieuGioChieu": "2018-08-04T14:50:00",
      "GiaVe": 75000,
      "ThoiLuong": 120,
      "MaNhom": "GP06",
      "Rap": {
        "MaRap": 346,
        "TenRap": "Rạp 2",
        "SoGhe": 60,
        "MaNhom": "GP06"
      }
    },
    {
      "MaLichChieu": 1664,
      "MaRap": 346,
      "MaPhim": 136,
      "NgayChieuGioChieu": "2018-08-05T14:50:00",
      "GiaVe": 75000,
      "ThoiLuong": 120,
      "MaNhom": "GP06",
      "Rap": {
        "MaRap": 346,
        "TenRap": "Rạp 2",
        "SoGhe": 60,
        "MaNhom": "GP06"
      }
    },
    {
      "MaLichChieu": 1665,
      "MaRap": 346,
      "MaPhim": 136,
      "NgayChieuGioChieu": "2018-08-06T14:50:00",
      "GiaVe": 75000,
      "ThoiLuong": 120,
      "MaNhom": "GP06",
      "Rap": {
        "MaRap": 346,
        "TenRap": "Rạp 2",
        "SoGhe": 60,
        "MaNhom": "GP06"
      }
    },
    {
      "MaLichChieu": 1666,
      "MaRap": 346,
      "MaPhim": 136,
      "NgayChieuGioChieu": "2018-08-07T14:50:00",
      "GiaVe": 75000,
      "ThoiLuong": 120,
      "MaNhom": "GP06",
      "Rap": {
        "MaRap": 346,
        "TenRap": "Rạp 2",
        "SoGhe": 60,
        "MaNhom": "GP06"
      }
    }
  ];
  constructor(private toastr: ToastrService, private activedRoute: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {

  }
  validate() {
    // if (!this.Movie.MaPhim) {
    //   this.toastr.error("Bạn chưa nhập mã phim!");
    //   return false;
    // }
    // if (!this.Movie.TenPhim) {
    //   this.toastr.error("Bạn chưa nhập tên phim!");
    //   return false;
    // }
    // if (!this.Movie.NgayKhoiChieu) {
    //   this.toastr.error("Bạn chưa nhập ngày khỏi chiếu!");
    //   return false;
    // }
    // if (!this.Movie.MoTa) {
    //   this.toastr.error("Bạn chưa nhập mô tả về phim!");
    //   return false;
    // }
    // if (!this.Movie.HinhAnh && $('#imgMovie')[0].files[0] == 0) {
    //   this.toastr.error("Bạn chưa nhập link hình ảnh!");
    //   return false;
    // }
    // if (!this.Movie.Trailer) {
    //   this.toastr.error("Bạn chưa nhập link trailer phim!");
    //   return false;
    // }
    return true;
  }
  addMovie() {
    if (this.validate()) {
      let formData = new FormData($("#formAddMovie")[0]);
      formData.append("MaNhom", "GP06");
      formData.append("DanhGia", this.Movie.DanhGia);
      formData.append("LichChieu", this.lichChieu);
      let objectMovie = {};
      formData.forEach(function (value, key) {
        objectMovie[key] = value;
      });
      // upload movie to server
      this.movieService.themPhim(objectMovie).subscribe((data) => {
        this.toastr.success(`Thêm phim ${data.TenPhim} thành công!`);

        //upload file to server
        let fileformdata = new FormData();
        fileformdata.append("TenPhim", this.Movie.TenPhim);
        fileformdata.append("Files", $('#imgMovie')[0].files[0]);
        this.movieService.uploadFileAnhPhim(fileformdata).subscribe(data => {
          console.log(data);
          if (data == true) {
            this.router.navigate(['/admin/moviemanage']);
          }
        })
      })

    }
  }
  onCancel() {
    this.router.navigate(['/admin/moviemanage']);
  }
}
