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

export const selectAllEntities = createSelector(
    selectBookState,
    BookReducer.selectEntities
);

export const selectAllProduct = createSelector(
    selectBookState,
    BookReducer.selectAll
);

export interface BooksViewModel {
    books: BookModel.Book[];
}

export const selectBooksViewModel = createSelector(
    selectAllProduct,
    (books: BookModel.Book[]): BooksViewModel => {
        return {
            books: books,
        }
    }
)

export const entityExists = createSelector(
    selectAllEntities,
    (entities, props):boolean => {
        return entities[props.id] == undefined ? false : true;
    }
);

export const selectEntityById = createSelector(
    selectAllEntities,
    (entities, props) => {
        return entities[props.id] 
    }
);