import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare var $;

@Component({
  selector: 'app-play-movie-trailer',
  templateUrl: './play-movie-trailer.component.html',
  styleUrls: ['./play-movie-trailer.component.scss']
})
export class PlayMovieTrailerComponent implements OnInit, OnChanges {
  @Input() srcTrailer;
  @Input() isShowModal;
  videoUrl: SafeResourceUrl;
  currentUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

  }
  ngOnChanges() {
    if (this.srcTrailer) {
      this.currentUrl = this.srcTrailer.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/") + "?rel=0&autoplay=1";
      console.log(this.currentUrl);
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentUrl);
    }
  }

}
