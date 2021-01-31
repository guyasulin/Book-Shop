import { createFeatureSelector, createSelector } from '@ngrx/store';
import  {bookFeatureKey, State, selectAll}  from './book.reducer';
import * as BookModel  from '../resources/book';
import * as BookReducer  from './book.reducer';

export const selectBookState = createFeatureSelector<BookReducer.State>(
    BookReducer.bookFeatureKey
)

export const getbooks = createSelector(selectBookState, selectAll)


export const getAllBook = createSelector(
    selectBookState,
    selectAll
);

export interface BooksViewModel {
    books: BookModel.Book[];
}

export const selectBooksViewModel = createSelector(
    getAllBook,
    (books: BookModel.Book[]): BooksViewModel => {
        return {
            books: books,
        }
    }
)

