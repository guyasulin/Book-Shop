import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import * as fromBookAction from '../state/book.actions';
import * as BookSelector from '../state/book.selectors';
import * as BookModel from '../resources/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: BookModel.Book[] = [];
  currentUrl: string;
  vm$: Observable<BookSelector.BooksViewModel>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.vm$ =  this.store.pipe(select(BookSelector.selectBooksViewModel));
    this.store.dispatch(fromBookAction.loadBooks())
  }

  deleteProduct(id: string) {
    this.store.dispatch(
      fromBookAction.deleteBook({ bookId: id })
    );
  }
}
