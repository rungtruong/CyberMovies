import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/_core/services/movie.service';
import * as $ from 'jquery';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.scss']
})
export class ChitietphimComponent implements OnInit {

  phim: any = {LichChieu:[],MoTa:""};
  autoPlay = false;
  today = new Date();
  tomorrow = new Date();
  videoUrl: SafeResourceUrl;
  currentUrl: any;
  private MaPhim;
  private subParam : Subscription;
  constructor( private activateRoute : ActivatedRoute, private movieService: MovieService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    $('html, body').animate({
      scrollTop: $("body").offset().top - 70
      }, 500);
    this.subParam = this.activateRoute.params.subscribe((param)=>{
      this.MaPhim = param.id;

      //Gọi service lấy dưữ lịẹệu phim gan vao thuoc tinh phim binding len giao dien
      this.LayChiTietPhim(this.MaPhim);
      
      
    })

  }
  scrollBookingList()
  {
    
    $('html, body').animate({
      scrollTop: $("#listSession").offset().top - 70
      }, 500);
  }
 
  LayChiTietPhim(id:number)
  {
    this.movieService.chiTietPhim(id).subscribe(res => {
      this.phim = res;
      console.log(this.phim)
    })
  }
  scrollTrailer()
  {
    $('html, body').animate({
      scrollTop: $("#trailer").offset().top - 70
      }, 500);
  }

}
