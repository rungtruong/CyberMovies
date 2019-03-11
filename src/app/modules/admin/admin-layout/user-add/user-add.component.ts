import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_core/services/user.service';
declare var $;
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  breadcrumbData = {
    label: "Quản Lý Người Dùng",
    version: "1.0",
    items: [
      { name: "Quản lý người dùng", url: "" },
      { name: "Thêm người dùng", url: "" },
    ]
  }
  User: any = {
    "MaNhom": "GP06",
  };
  constructor(private toastr: ToastrService, private activedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {

  }
  validate() {
    if (!this.User.HoTen) {
      this.toastr.error("Bạn chưa nhập họ tên!");
      return false;
    }
    if (!this.User.TaiKhoan) {
      this.toastr.error("Bạn chưa nhập tài khoản!");
      return false;
    }
    if (!this.User.MatKhau) {
      this.toastr.error("Bạn chưa nhập mật khẩu!");
      return false;
    }
    if ($('#NhapLaiMatKhau').val() !== this.User.MatKhau) {
      this.toastr.error("Mật khẩu không khớp!");
      return false;
    }
    if (!this.User.Email) {
      this.toastr.error("Bạn chưa nhập email!");
      return false;
    }
    if (!this.User.SoDT) {
      this.toastr.error("Bạn chưa nhập số điện thoại!");
      return false;
    }
    if (!this.User.MaNhom) {
      this.toastr.error("Bạn chưa nhập mã nhóm");
      return false;
    }
    if (!this.User.MaLoaiNguoiDung) {
      this.toastr.error("Bạn chưa chọn loại người dùng");
      return false;
    }
    return true;
  }
  addUser() {
    if (this.validate()) {
      let formData = new FormData($("#formAddUser")[0]);
      let objectUser = {};
      formData.forEach(function (value, key) {
        objectUser[key] = value;
      });

      // upload User to server
      this.userService.themUser(objectUser).subscribe((data) => {
        if(typeof data==="object"){
          this.toastr.success(`Thêm tài khoản ${data.TaiKhoan} thành công!`);
          this.router.navigate(['/admin/usermanage']);
        }
        else this.toastr.error(data);        
      })

    }
  }
  onCancel() {
    this.router.navigate(['/admin/usermanage']);
  }

}
