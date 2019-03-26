import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { OwlCarousel } from 'ngx-owl-carousel';
declare var $;


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  isShowModal: boolean;
  currentUrl: any;
  dsPhim: any = [
    { HinhAnh: "./assets/img/slide1.jpg", Trailer: "https://www.youtube.com/watch?v=6zQe-K8Ywq4" },
    { HinhAnh: "./assets/img/slide2.jpg", Trailer: "https://www.youtube.com/watch?v=0G8EHFK6kGo" },
    { HinhAnh: "./assets/img/slide3.jpg", Trailer: "https://www.youtube.com/watch?v=IIIgZI8QDc8" },
    { HinhAnh: "./assets/img/slide4.jpg", Trailer: "https://www.youtube.com/watch?v=IIIgZI8QDc8" },
  ];

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
  ngOnDestroy() {
    $('#modalTrailer').modal('hide');
  }
  ngAfterViewInit() {
    $('#modalTrailer').on('hidden.bs.modal', () => {
      $('#player').each((index) => {
        $('#player').attr('src', null);
        return false;
      });
    });
  }

  @ViewChild('owlElement') owlElement: OwlCarousel;


  fun() {
    this.owlElement.next([200])
    //duration 200ms
  }



}
