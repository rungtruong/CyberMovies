import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { OwlCarousel } from 'ngx-owl-carousel';
declare var $;


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {
  isShowModal: boolean;
  currentUrl: any;
  dsPhim: any = [
    { HinhAnh: "../../../../assets/img/slide1.jpg", Trailer: "https://www.youtube.com/watch?v=IIIgZI8QDc8" },
    { HinhAnh: "../../../../assets/img/slide2.jpg", Trailer: "https://www.youtube.com/watch?v=3T9c42gxXzg" },
    { HinhAnh: "../../../../assets/img/slide3.jpg", Trailer: "https://www.youtube.com/watch?v=IIIgZI8QDc8" },
    { HinhAnh: "../../../../assets/img/slide4.jpg", Trailer: "https://www.youtube.com/watch?v=IIIgZI8QDc8" },
  ];
  // dsPhim: any = [];
  // srcTrailer: string = 'https://www.youtube.com/embed/Mh2ebPxhoLs';

  // Option owl Carousel
  mySlideOptions = { items: 1, dots: true, nav: false, autoplay: true, loop: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  constructor(private movieService: MovieService) {



  }

  playTrailer(Trailer) {

    if (Trailer) {
      this.currentUrl = Trailer;
      $('#modalTrailer').modal('show');
    } else {
      $('#modalTrailer').modal('hide');
    }
    if ($('#modalTrailer').modal('show')) {
      this.isShowModal = true;
    } else {
      this.isShowModal = false;
      this.currentUrl = "";
    }

  }
  ngOnInit() {
    
  }
  ngOnChanges() {

  }

  @ViewChild('owlElement') owlElement: OwlCarousel;


  fun() {
    this.owlElement.next([200])
    //duration 200ms
  }



}
