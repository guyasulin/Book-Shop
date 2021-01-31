import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { UserComponent } from './user.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/resources/auth.guard';

const routes: Routes = [
  {
    path: 'user-details',
    component: UserComponent,
    canActivate: [AuthGuard],
  }
]

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [UserComponent],
})
export class UserModule { }
