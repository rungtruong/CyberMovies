import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @Output() islogin: EventEmitter<any> = new EventEmitter();
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

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
          this.islogin.emit("logintrue");
          $("#formSignin")[0].reset();
        }
      }, err => this.toastr.error(err)
    )

  }
}
