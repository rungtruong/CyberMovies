import { Location } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignIn: boolean;
  isAccount = "Đăng Nhập";
  isAdmin: any;
  account: any = {};
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.checkSignIn();
  }
  checkSignIn() {
    if (localStorage.getItem("userLogin")) {
      this.account = JSON.parse(localStorage.getItem("userLogin"));
      this.isAccount = this.account.HoTen;
      this.isAdmin=this.account.MaLoaiNguoiDung;
      // this.isSignIn = true;
      $("#btnSignIn").removeAttr("data-toggle");
      $("#btnSignIn").removeAttr("data-target");
      $("#btnSignIn").attr("data-toggle", "dropdown");
      // if (this.isAdmin==="QuanTri") {
      //   this.router.navigate(['/admin']);
      // }else{
      //   this.router.navigate(['/home']);
      // }
    } else {
      $("#btnSignIn").removeAttr("data-toggle");
      $("#btnSignIn").attr("data-toggle", "modal");
      $("#btnSignIn").attr("data-target", "#signIn");
    }
  }
  signOut() {
    localStorage.removeItem("userLogin");
    this.router.navigate(['/home']);
    window.location.reload();
  }
  isLogin(event) {
    console.log(event);
    if (event === "logintrue") {
      $("#signIn").modal('hide');
      window.location.reload();
    }
  }
  isSignUp(event){
    if (event) {
      this.isSignIn=false;
    }
  }
}
