import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

import { RouterModule, Routes } from '@angular/router';



const homeLayoutRoutes: Routes = [
  {
    path: '', component: HomeTemplateComponent, children: [
      { path: '', component: HomeLayoutComponent },
    ]
  }];
@NgModule({
  declarations: [HomeTemplateComponent, HomeLayoutComponent, HeaderComponent, FooterComponent, CarouselComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeLayoutRoutes)
  ],
  exports: [
    HomeTemplateComponent,
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent

  ]
})
export class HomeModule { }
