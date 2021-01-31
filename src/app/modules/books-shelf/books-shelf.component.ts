import { BookApiService } from './resources/book-api.service';
import { AppState } from 'src/app/store';
import { Book } from './resources/book';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromBookAction from './state/book.actions';
import { getAllBook, getbooks } from './state/book.selectors';
import * as BookSelector from './state/book.selectors';
import  * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';
import * as fromAuthAction from '../../store/actions/auth.actions';

@Component({
  selector: 'app-books-shelf',
  templateUrl: './books-shelf.component.html',
  styleUrls: ['./books-shelf.component.scss']
})
export class BooksShelfComponent implements OnInit {

  public vm$: Observable<BookSelector.BooksViewModel>;
  books$: Observable<Book[]>

  constructor(
    private store: Store<AppState>,
    private bookService: BookApiService
  ) { }

  ngOnInit(): void {
    // this.vm$ =  this.store.pipe(select(BookSelector.selectBooksViewModel))
      this.store.dispatch(fromBookAction.loadBooks())
      this.books$ = this.store.pipe(select(getbooks))

  }

  getBooks() {
    // this.store.dispatch(fromBookAction.loadBooksAdmin());
  }

  buyBook(bookId) {
    console.log(bookId);
    const bookIdObservable = {
      next: (bookId) => {
          console.log('success');
      },
      error: (err) => {
        console.log(err);
      },
    };
    this.bookService.purchasesBookById(bookId).subscribe(bookIdObservable)
  }

}
