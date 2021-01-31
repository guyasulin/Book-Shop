import { BookApiService } from './../resources/book-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { Book } from '../resources/book';
import * as fromBookSelectors from '../state/book.selectors';
import * as fromBookAction from '../state/book.actions';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  bookId: string;
  isBookInStore$: Observable<boolean>;
  book$: Observable<Book>;
  
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private service: BookApiService
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');

    this.isBookInStore$ = this.store.pipe(
      select(fromBookSelectors.entityExists, { id: this.bookId })
    );

    this.book$ = this.isBookInStore$.pipe(
      mergeMap((isProductInStore) => {
        if (!isProductInStore) {
            this.store.dispatch(fromBookAction.loadAdminBook({id: this.bookId}))
        }

        return this.store.pipe(
          select(fromBookSelectors.selectEntityById, {
            id: this.bookId
          })
        )
      })
    )
  }

  deleteBook(id: string) {
    this.store.dispatch(
      fromBookAction.deleteBook({ bookId: id })
    );
  }
}
