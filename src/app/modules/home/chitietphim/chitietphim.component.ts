import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/_core/services/movie.service';
declare var $;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.scss']
})
export class ChitietphimComponent implements OnInit, AfterViewInit {
  currentUrl: any;
  isShowModal: boolean;
  stars: Array<any> = [];
  stars_o: Array<any> = [];
  isSelelect = 1;
  phim: any = { LichChieu: [], MoTa: "" };
  today = new Date();
  tomorrow = new Date();
  private MaPhim;
  private subParam: Subscription;

  constructor(private activateRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.subParam = this.activateRoute.params.subscribe((param) => {
      this.MaPhim = param.id;
      //Gọi service lấy dưữ lịẹệu phim gan vao thuoc tinh phim binding len giao dien
      this.LayChiTietPhim(this.MaPhim);
    })

  }

  ngAfterViewInit() {
    $('#modalTrailerMovieDetail').on('hidden.bs.modal', () => {
      this.isShowModal = false;
    });
  }
  LayChiTietPhim(id: number) {
    this.movieService.chiTietPhim(id).subscribe(res => {
      this.phim = res;
      console.log(this.phim)
      this.renderStar(this.phim.DanhGia);
      if (this.phim.LichChieu.length == 0) {
        this.isSelelect = 2;
      }
    })
  }


  public renderStar(star: number) {
    for (let i = 0; i < star; i++) {
      this.stars.push(i);
    }
    for (let i = 0; i < 5 - star; i++) {
      this.stars_o.push(i);
    }
  }


  getUrlEvent(event) {
    if (event) {
      this.currentUrl = event;
      $('#modalTrailerMovieDetail').modal('show');
    } else {
      $('#modalTrailerMovieDetail').modal('hide');
    }
    if ($('#modalTrailerMovieDetail').modal('show')) {
      this.isShowModal = true;
    } else {
      this.isShowModal = false;
      this.currentUrl = "";
    }
  }


}
