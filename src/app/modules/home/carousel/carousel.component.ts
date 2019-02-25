import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

import { OwlCarousel } from 'ngx-owl-carousel';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  dsPhim: any = [
    { HinhAnh: "../../../../assets/img/slide1.jpg" },
    { HinhAnh: "../../../../assets/img/slide2.jpg" },
    { HinhAnh: "../../../../assets/img/slide3.jpg" },
    { HinhAnh: "../../../../assets/img/slide4.jpg" },
  ];
  // dsPhim: any = [];
  srcTrailer = "https://www.youtube.com/embed/8-BIvwSwOfY";
  // Option owl Carousel
  mySlideOptions = { items: 1, dots: true, nav: false, autoplay: true, loop: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  constructor(private movieService: MovieService) {
    movieService.layDanhSachPhim().subscribe(
      (data) => {
        // this.dsPhim = data;
        // console.log(data);

      }
    )
  }


  playTrailer(Trailer) {
    console.log(Trailer);
    this.srcTrailer = Trailer;
  }
  ngOnInit() {
  }


  @ViewChild('owlElement') owlElement: OwlCarousel;


  fun() {
    this.owlElement.next([200])
    //duration 200ms
  }



}
