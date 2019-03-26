import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/_core/services/movie.service';
@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.scss']
})
export class ChitietphimComponent implements OnInit {

  phim: any = {LichChieu:[],MoTa:""};
  today = new Date();
  tomorrow = new Date();
  
  private MaPhim;
  private subParam : Subscription;
  constructor( private activateRoute : ActivatedRoute, private movieService: MovieService ) { }

  ngOnInit() {
    this.subParam = this.activateRoute.params.subscribe((param)=>{
      this.MaPhim = param.id;

      //Gọi service lấy dưữ lịẹệu phim gan vao thuoc tinh phim binding len giao dien
      this.LayChiTietPhim(this.MaPhim);
      
      
    })

  }
 
  LayChiTietPhim(id:number)
  {
    this.movieService.chiTietPhim(id).subscribe(res => {
      this.phim = res;
      console.log(this.phim)
    })
  }
  
}
