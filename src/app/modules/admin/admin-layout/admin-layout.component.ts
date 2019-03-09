import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit() {
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
