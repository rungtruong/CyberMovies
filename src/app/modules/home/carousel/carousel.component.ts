import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
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
  srcTrailer: string = 'https://www.youtube.com/embed/Mh2ebPxhoLs?autoplay=1';
  videoUrl: SafeResourceUrl;
  // Option owl Carousel
  mySlideOptions = { items: 1, dots: true, nav: false, autoplay: true, loop: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  constructor(private movieService: MovieService, private sanitizer: DomSanitizer) {

    this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl(this.srcTrailer);

  }

  playTrailer(Trailer) {
    // console.log(Trailer);
    // this.srcTrailer = Trailer;
  }
  ngOnInit() {
    this.movieService.layDanhSachPhim().subscribe(
      (data) => {
        // this.dsPhim = data;
        console.log(data);

      });
  }


  @ViewChild('owlElement') owlElement: OwlCarousel;


  fun() {
    this.owlElement.next([200])
    //duration 200ms
  }



}
