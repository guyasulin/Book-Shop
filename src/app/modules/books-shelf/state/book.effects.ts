import { BookApiService } from './../resources/book-api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap, concatMap } from 'rxjs/operators';
import * as fromBookActions from './book.actions'


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBookActions.loadBooks),
      mergeMap((action) =>
        this.bookService.getAllBooks().pipe(
          map((books) =>
          fromBookActions.loadBooksSuccess({ books:books }),
          tap(data => JSON.stringify( data))
          ),
          catchError((err) => of(fromBookActions.loadBooksFailure(err)))
        )
      )
    )
  );

  loadBook$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromBookActions.loadBook),
         mergeMap((action) =>
          this.bookService.getBook(action.id).pipe(
            map((book) => fromBookActions.loadBookSuccess({ book : book })),
            catchError(error => of(fromBookActions.loadBookFaliur({ error }))))
          ),
    );
  });
  
  createBook$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromBookActions.addBook),
    mergeMap((action) =>
      this.bookService.createBook(action.book).pipe(
        map((book) =>
          fromBookActions.addBookSuccess({ book: book })
        ),
        catchError((error) =>
          of(fromBookActions.addBookFailure({ error: error }))
        )
      )
    )
  )
);

updateBook$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromBookActions.upsertBook),
    mergeMap((action) => 
      this.bookService.editBook(action.book).pipe(
        map((book) => fromBookActions.upsertBookSuccess({ book })),
        catchError((error) =>
        of(fromBookActions.upsertBookFailure({ error }))
        )
      )
    )
  )
);

deleteBook$ = createEffect(() =>
this.actions$.pipe(
  ofType(fromBookActions.deleteBook),
  mergeMap((action) =>
    this.bookService.deleteBook(action.bookId).pipe(
      map(() => fromBookActions.deleteBookSuccess()),
      catchError((error) =>
        of(fromBookActions.deleteBookFailure({ error }))
      )
    )
  )
)
);

  constructor(private actions$: Actions, private bookService: BookApiService) {}

}
