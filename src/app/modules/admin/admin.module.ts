import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { MoviesManagementComponent } from './admin-layout/movies-management/movies-management.component';
import { MovieAddComponent } from './admin-layout/movie-add/movie-add.component';
import { BreadcrumbModule } from 'src/app/_core/shareComponent/breadcrumb/breadcrumb.module';
import { MovieEditComponent } from './admin-layout/movie-edit/movie-edit.component';
import { FormsModule } from '@angular/forms';

import { UserAddComponent } from './admin-layout/user-add/user-add.component';
import { UserEditComponent } from './admin-layout/user-edit/user-edit.component';
import { UserManagementComponent } from './admin-layout/user-management/user-management.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', component: MoviesManagementComponent },
      { path: 'moviemanage', component: MoviesManagementComponent },
      { path: 'movieadd', component: MovieAddComponent },
      { path: 'movieedit/:id', component: MovieEditComponent },
      { path: 'usermanage', component: UserManagementComponent },
      { path: 'useradd', component: UserAddComponent },
      { path: 'useredit/:id', component: UserEditComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  declarations: [AdminLayoutComponent, MoviesManagementComponent, MovieAddComponent, MovieEditComponent, UserAddComponent, UserEditComponent, UserManagementComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule.forChild(adminRoutes),
    FormsModule
  ]
})
export class AdminModule { }
