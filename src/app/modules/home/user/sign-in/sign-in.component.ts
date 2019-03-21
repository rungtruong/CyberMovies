import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private toastr: ToastrService, ) { }

  ngOnInit() {
  }
  DangNhap(thongTinDangNhap: any) {
    this.userService.dangNhap(thongTinDangNhap.TaiKhoan, thongTinDangNhap.MatKhau).subscribe(
      (data) => {
        // console.log(data);
        if (typeof data === 'object') {
          //Thanh cong: Luu vao local
          const sUserLogin: string = JSON.stringify(data);
          localStorage.setItem('userLogin', sUserLogin);
        }
        else {
          this.toastr.error(data);
        }
      }
    )

  }
}
