import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/_core/services/user.service';
import { User } from 'src/app/_core/models/user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  saveForm: boolean = false;
  @Output() isSignUp: EventEmitter<any> = new EventEmitter();
  @ViewChild('formSignUp') formSignUp: NgForm;
  constructor(private user: UserService) { }

  ngOnInit() {
  }
  comparePassword(mk: string, mknhaplai: string): boolean {
    if (mknhaplai !== mk) {
      this.formSignUp.control.setErrors({ 'loiNhapLaiMauKhau': true });
      return true;
    }
    else {
      this.formSignUp.control.setErrors({ 'loiNhapLaiMauKhau': false });
      return false;
    }

  }
  signUP(nguoiDung: User) {
    nguoiDung.MaNhom = 'GP06';
    nguoiDung.MaLoaiNguoiDung = 'KhachHang';
    this.user.dangKy(nguoiDung).subscribe(
      (data) => {
        // console.log(data);
        if (typeof data === 'object') {
          Swal.fire('Thành công...', 'Chúc mừng bạn đăng ký thành công!', 'success');
          this.isSignUp.emit("isSignUp");
        }
        else {
          Swal.fire('Đăng ký lại...', data, 'warning')
        }
      }
    )
    this.saveForm = true;

    // console.log(nguoiDung);

  }
}
