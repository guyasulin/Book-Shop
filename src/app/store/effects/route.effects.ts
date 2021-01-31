import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import * as fromBookActions from '../../modules/books-shelf/state/book.actions'



@Injectable()
export class RouteEffects {

  goShopping$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap(() => this.route.navigate(['/shopping/book-shelf']))
      ),
    { dispatch: false }
  );

  goHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.route.navigate(['/']))
      ),
    { dispatch: false }
  );

  goLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.registerSuccess),
        tap(() => this.route.navigate(['/auth/signin']))
      ),
    { dispatch: false }
  );
  
  goListBook$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBookActions.addBookSuccess, fromBookActions.upsertBookSuccess),
        tap(() => this.route.navigate(['/shopping/book-list']))
      ),
    { dispatch: false }
  );
  
  
  constructor(private actions$: Actions, private route: Router) {}

}
