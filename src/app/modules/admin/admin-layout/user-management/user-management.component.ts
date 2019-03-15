import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_core/services/user.service';
import { User } from 'src/app/_core/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  userArray: User[] = [];
  breadcrumbData = {
    label: "Quản Lý Người Dùng",
    version: "1.0",
    items: [
      { name: "Quản lý người dùng", url: "" },
      { name: "Danh sách người dùng", url: "" }
    ]
  }

  idMovie: number;
  constructor(private toastr: ToastrService, private activedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userService.layDanhSachUser().subscribe((data) => {
      this.userArray = data;
      // console.log(this.userArray);
    })
  }

  deleteUser(taikhoan, maloainguoidung) {
    this.userService.xoaUser(taikhoan).subscribe(data => {
      if (data === "Xóa người dùng thành công") {
        this.toastr.success(`Xóa tài khoản ${taikhoan} thành công!`);
        this.getUser();
      }
    })

  }
  acceptDelete(taikhoan, maloainguoidung) {
    if (maloainguoidung === "QuanTri") {
      this.toastr.error(`Không thể xóa tài khoản quản trị viên!`);
    }
    else {
      Swal.fire({
        title: `Bạn có chắc chắn muốn xóa tài khoản ${taikhoan}?`,
        text: 'Xóa sẽ không thể khôi phục lại!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'XÓA',
        cancelButtonText: 'HỦY'
      }).then((result) => {
        if (result.value) {
          this.deleteUser(taikhoan, maloainguoidung);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.toastr.error('Hủy xóa!');
          this.getUser();
        }
      })
    }
  }
}
