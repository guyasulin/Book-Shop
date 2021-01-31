import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLinksComponent } from './auth-links/auth-links.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../../store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../store/effects/auth.effects';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthLinksComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer), 
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    AuthLinksComponent
  ]
})
export class AuthModule { }
