import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import * as fromBookActions from '../../modules/books-shelf/state/book.actions';

@Injectable()
export class AlertEffects {
  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.login),
        tap(() => this.alertService.info('Checking your information'))
      ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
          this.alertService.success(
            'Welcome Back ' + action.user.email + ' !'
          )
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginFailure),
        tap(() => this.alertService.danger('Unable to login'))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.alertService.warning('You are logged out'))
      ),
    { dispatch: false }
  );
  comeBackSoon$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() =>
          setTimeout(() => {
            this.alertService.info('Come Back Soon!');
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  unableToLoadBooks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBookActions.loadBooksFailure),
        tap(() =>
          setTimeout(() => {
            this.alertService.danger('Unable to load books');
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  bookCreated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBookActions.addBookSuccess),
        tap((action) => this.alertService.success('Book Created'))
      ),
    { dispatch: false }
  );

  unableToCreateBook$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBookActions.addBookFailure),
        tap(() =>
          setTimeout(() => {
            this.alertService.danger('Unable to create Book');
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  bookUpsertSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBookActions.upsertBookSuccess),
        tap(() =>
          setTimeout(() => {
            this.alertService.info('Book Updated');
          }, 1000)
        )
      ),
    { dispatch: false }
  );
  unableToEditBook$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBookActions.upsertBookFailure),
        tap(() =>
          setTimeout(() => {
            this.alertService.danger('Unable to edit book');
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  removeBookFromStore$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromBookActions.deleteBook,
        ),
        tap(() =>
          setTimeout(() => {
            this.alertService.warning('Remove Book From Store');
          }, 1000)
        )
      ),
    { dispatch: false }
  );
  bookDeleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBookActions.deleteBookSuccess),
        tap(() =>
          setTimeout(() => {
            this.alertService.info('Book removed from Database');
          }, 1000)
        )
      ),
    { dispatch: false }
  );
  unableToDeleteBook$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBookActions.deleteBookFailure),
        tap(() =>
          setTimeout(() => {
            this.alertService.danger('Unable to delete book');
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private alertService: AlertService) {}
}
