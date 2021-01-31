import { Book } from './../resources/book';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadBooks = createAction(
  '[Book Component] Load Books',
);

// export const loadBooksAdmin = createAction(
//   '[Book List Component] Load Books Success',
// );

export const loadBooksSuccess = createAction(
  '[Book Effect] Load Books Success',
  props<{ books: Book[] }>()
);


export const loadBooksFailure = createAction(
  '[Book Effect] Load Books Failure',
  props<{ error: any }>()
);
/***************************************************** */
/**** LOAD INDVIDUAL Book ** */
/***************************************************** */
export const loadBook = createAction(
  '[books component] Load Book', 
  props<{ id: string }>()
);

export const loadAdminBook = createAction(
  '[Book Item component] Load Book', 
  props<{ id: string }>()
);

export const loadBookSuccess = createAction(
  '[Book Effect] Load Book Success', 
  props<{ book: Book }>()
);

export const loadBookFaliur = createAction(
  '[books Effect] Load Book Faliur', 
  props<{ error: any }>()
);

export const addBook = createAction(
  '[Book/API] Add Book',
  props<{ book: Book }>()
);

export const addBookSuccess = createAction(
  '[Book Effect] Add Book Success',
  props<{ book: any }>()
);

export const addBookFailure = createAction(
  '[Book Effect] Add Book Failure',
  props<{ error: any }>()
);


export const upsertBook = createAction(
  '[Book/API] Upsert Book',
  props<{ book: Book }>()
);

export const upsertBookSuccess = createAction(
  '[Book Effect] Upsert Book Success',
  props<{ book: Book }>()
);
export const upsertBookFailure = createAction(
  '[Book Effect] Upsert Book failure',
  props<{ error: any }>()
);

export const deleteBook = createAction(
  '[Book/API] Delete Book',
  props<{ bookId: string }>()
);

export const deleteBookSuccess = createAction(
  '[Book Effect] Delete Book Success'
);

export const deleteBookFailure = createAction(
  '[Book Effect] Delete Book Failure',
  props<{ error: any }>()
);


export const addBooks = createAction(
  '[Book/API] Add books',
  props<{ books: Book[] }>()
);

export const upsertBooks = createAction(
  '[Book/API] Upsert books',
  props<{ books: Book[] }>()
);

export const updateBook = createAction(
  '[Book/API] Update Book',
  props<{ book: Update<Book> }>()
);

export const updateBooks = createAction(
  '[Book/API] Update books',
  props<{ books: Update<Book>[] }>()
);



export const clearBooks = createAction(
  '[Book/API] Clear books'
);
