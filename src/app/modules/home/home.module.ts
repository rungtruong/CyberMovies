import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { OwlModule } from 'ngx-owl-carousel';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NowShowingComponent } from './movies-list/now-showing/now-showing.component';
import { MovieItemComponent } from './movies-list/movie-item/movie-item.component';
import { ComingSoonComponent } from './movies-list/coming-soon/coming-soon.component';
import { ChitietphimComponent } from './chitietphim/chitietphim.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { PlayMovieTrailerComponent } from './play-movie-trailer/play-movie-trailer.component';
import { TabSearchMovieComponent } from './tab-search-movie/tab-search-movie.component';

import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { GheComponent } from './book-ticket/ghe/ghe.component';
import { NewsComponent } from './news/news.component';
import { NewsFilmComponent } from './news/news-film/news-film.component';
import { NewsReviewComponent } from './news/news-review/news-review.component';
import { NewsPromotionComponent } from './news/news-promotion/news-promotion.component';
import { MovieListTemplateComponent } from './movies-list/movie-list-template/movie-list-template.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewDetailComponent } from './news/news-review/review-detail/review-detail.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';



const homeLayoutRoutes: Routes = [
  {
    path: '', component: HomeTemplateComponent, children: [
      { path: '', component: HomeLayoutComponent },
      { path: 'chitietphim/:id', component: ChitietphimComponent },
      { path: 'bookticket', component: BookTicketComponent },
      { path: 'news', component: NewsComponent },
      { path: 'movielist', component: MovieListTemplateComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'bookinghistory', component: BookingHistoryComponent },
      { path: 'news-film', component: NewsFilmComponent },
      { path: 'news-review', component: NewsReviewComponent },
      { path: 'news-promotion', component: NewsPromotionComponent },
    ]
  }];
@NgModule({
  declarations: [HomeTemplateComponent,
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    MoviesListComponent,
    NowShowingComponent,
    MovieItemComponent,
    ComingSoonComponent,
    ChitietphimComponent,
    SignInComponent,
    SignUpComponent,
    PlayMovieTrailerComponent,
    TabSearchMovieComponent,
    BookTicketComponent,
    GheComponent,
    NewsComponent,
    NewsFilmComponent,
    NewsReviewComponent,
    NewsPromotionComponent,
    MovieListTemplateComponent,
    ContactComponent,
    ReviewDetailComponent,
    BookingHistoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeLayoutRoutes),
    OwlModule,
    FormsModule,
  ]
})
export class HomeModule { }
