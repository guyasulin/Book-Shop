import { registerFailure } from './../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/resources/auth.service';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((user) => AuthActions.loginSuccess({ user: user } )),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.register),
      concatMap((action) =>
        this.authService.register(action.email, action.password).pipe(
          map((user) => AuthActions.registerSuccess({ user: user })),
          catchError((error) => of(AuthActions.registerFailure({ error })))
        )
      )
    );
  });

  signout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      concatMap(() =>
        this.authService.signout().pipe(
          map((user) => AuthActions.logoutSuccess()),
          catchError((error) => of(AuthActions.logoutFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}

}
