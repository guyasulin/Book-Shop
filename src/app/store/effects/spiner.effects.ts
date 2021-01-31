import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import * as fromBookActions from '../../modules/books-shelf/state/book.actions';

@Injectable()
export class SpinnerEffects {
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.login,
          fromBookActions.loadBooks,
          // fromBookActions.loadAdminBooks,
          fromBookActions.loadBooks,
          // fromBookActions.loadAdminBooks,
          fromBookActions.addBooks
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginSuccess,
          fromAuthActions.loginFailure,
          fromBookActions.loadBooksFailure,
          fromBookActions.loadBooksSuccess,
          fromBookActions.loadBooksFailure,
          fromBookActions.loadBookSuccess,
          fromBookActions.addBookSuccess,
          fromBookActions.addBookFailure
        ),
        tap(() => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}
}
