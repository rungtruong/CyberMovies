import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-play-movie-trailer',
  templateUrl: './play-movie-trailer.component.html',
  styleUrls: ['./play-movie-trailer.component.scss']
})
export class PlayMovieTrailerComponent implements OnInit {
  @Input() srcTrailer;
  videoUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcTrailer);
  }

}
