import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  account: any;
  isAccount: any;
  isAdmin: any;
  isSignIn: boolean;


  constructor(private router: Router, ) { }

  ngOnInit() {
    this.checkSignIn();
  }

  checkSignIn() {
    if (localStorage.getItem("userLogin")) {
      this.account = JSON.parse(localStorage.getItem("userLogin"));
      this.isAccount = this.account.HoTen;
      this.isAdmin = this.account.MaLoaiNguoiDung;
      this.isSignIn = true;
      if (this.isAdmin !== "QuanTri") {
        this.router.navigate(['/home']);
      }
    } else this.router.navigate(['/home']);
  }
  signOut() {
    localStorage.removeItem("userLogin");
    this.router.navigate(['/home']);
    // window.location.reload();
  }


  ngAfterViewInit(): void {

    // if ($(window).outerWidth() > 992) {
    //   $("nav.side-navbar").mCustomScrollbar({
    //     scrollInertia: 200
    //   });
    // }

    // Main Template Color
    var brandPrimary = '#33b35a';

    // ------------------------------------------------------- //
    // Side Navbar Functionality
    // ------------------------------------------------------ //
    $('#toggle-btn').on('click', function (e) {

      e.preventDefault();

      if ($(window).outerWidth() > 1194) {
        $('nav.side-navbar').toggleClass('shrink');
        $('.page').toggleClass('active');
      } else {
        $('nav.side-navbar').toggleClass('show-sm');
        $('.page').toggleClass('active-sm');
      }
    });

    // ------------------------------------------------------- //
    // Tooltips init
    // ------------------------------------------------------ //    

    $('[data-toggle="tooltip"]').tooltip();


  }

}
