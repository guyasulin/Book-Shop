import { AuthModule } from './modules/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './modules/auth/resources/token.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { AlertModule } from 'ngx-alerts';

/** Material */
import { AngularMaterialModule } from './angular-material/angular-material.module';

/** Modules */
import { SharedModule } from './shared/shared.module';
import { CoreComponent } from './core/core.component';
import { UserModule } from './modules/user/user.module';

/**NgRx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { AppEffects } from './store/effects/app.effects';
import { RouteEffects } from './store/effects/route.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AlertEffects } from './store/effects/alert.effects';
import { SpinnerEffects } from './store/effects/spiner.effects';
import { AlertAdminEffects } from './store/effects/alertAdmin.effects';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AuthModule,
    UserModule,
    NgxSpinnerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, { 
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionTypeUniqueness:true,
        strictActionWithinNgZone: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      AppEffects, 
      SpinnerEffects,
      RouteEffects, 
      AlertEffects, 
      AlertAdminEffects,
    ]),

    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
