import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { OwlModule } from 'ngx-owl-carousel';
import { AdminModule } from './modules/admin/admin.module';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { YoutubePlayerModule } from 'ngx-youtube-player';

const appRoutes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HomeModule,
    HttpClientModule,
    OwlModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      closeButton: true,
    }),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
