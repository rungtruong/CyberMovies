import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

import { RouterModule, Routes } from '@angular/router';

import { OwlModule } from 'ngx-owl-carousel';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NowShowingComponent } from './movies-list/now-showing/now-showing.component';
import { MovieItemComponent } from './movies-list/movie-item/movie-item.component';
import { ComingSoonComponent } from './movies-list/coming-soon/coming-soon.component';
import { ChitietphimComponent } from './chitietphim/chitietphim.component';


const homeLayoutRoutes: Routes = [
  {
    path: '', component: HomeTemplateComponent, children: [
      { path: '', component: HomeLayoutComponent },
      { path: 'chitietphim/:id', component: ChitietphimComponent }
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
    ChitietphimComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeLayoutRoutes),
    OwlModule,

  ]
})
export class HomeModule { }
