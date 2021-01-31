import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Components */
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
/** Material */
import { AngularMaterialModule } from '../angular-material/angular-material.module';
/** Modules */
import { AuthModule } from '../modules/auth/auth.module';
import { RouterModule } from '@angular/router';
import { UserModule } from '../modules/user/user.module';



@NgModule({
  declarations: [
    TopBarComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AuthModule,
    RouterModule,
    UserModule
  ],
  exports: [
    TopBarComponent, 
    HeaderComponent,
  ]
})
export class SharedModule { }
