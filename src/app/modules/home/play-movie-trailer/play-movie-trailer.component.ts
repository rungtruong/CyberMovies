import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare var $;

@Component({
  selector: 'app-play-movie-trailer',
  templateUrl: './play-movie-trailer.component.html',
  styleUrls: ['./play-movie-trailer.component.scss']
})
export class PlayMovieTrailerComponent implements OnInit {
  @Input() srcTrailer;
  videoUrl: SafeResourceUrl;
  currentUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
   
  }
  ngOnChanges() {
    if (this.srcTrailer) {
      this.currentUrl = this.srcTrailer.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
      // this.currentUrl = this.srcTrailer.replace("https://www.youtube.com/watch?v=", "");
      console.log(this.currentUrl);
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentUrl);
    }

  }

}
