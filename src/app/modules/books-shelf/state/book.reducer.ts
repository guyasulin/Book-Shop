import { Book } from './../resources/book';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as bookAction  from './book.actions'

export const bookFeatureKey = 'books';

export interface State extends EntityState<Book> {
  error: any;
  // books: Book[]

}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  // selectId: selectProductId
});

export const initialState: State = adapter.getInitialState({
  error: null,
  // books: []
});

export const reducer = createReducer(
  initialState,
  on(bookAction.loadBooksSuccess,(state, action) => {
    return adapter.setAll(action.books, state)
  }),

  on(bookAction.loadBooksFailure,
    (state, action) => {
      return {
        ...state, 
        error: action.error
      }
    }
  ),

  on(bookAction.loadBookSuccess,
    (state, action) => adapter.addOne(action.book, state)
  ),
  on(bookAction.loadBookFaliur,
    (state, action) => {
      return {
        ...state, 
        error: action.error
      }
    }
  ),
  // on(bookAction.upsertBook,  
  //   (state, action) => adapter.upsertOne(action.book, state)
  // ),
  on(bookAction.addBookSuccess,
    (state, action) => adapter.addOne(action.book, state)
  ),
  on(bookAction.upsertBooks,
    (state, action) => adapter.upsertMany(action.books, state)
  ),
  on(bookAction.upsertBookSuccess,
    (state, action) => adapter.upsertOne(action.book, state)
  ),
  on(bookAction.updateBooks,
    (state, action) => adapter.updateMany(action.books, state)
  ),
  on(bookAction.deleteBook,
    (state, action) => adapter.removeOne(action.bookId, state)
  ),
  
  // on(bookAction.deleteBooks,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  on(bookAction.clearBooks,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();