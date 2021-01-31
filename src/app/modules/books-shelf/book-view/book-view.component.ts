import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { Book } from '../resources/book';
import * as fromBookSelectors from '../state/book.selectors';
import * as fromBookAction from '../state/book.actions';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  bookId: string;
  isbookIdInStore$: Observable<boolean>;
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');

    this.isbookIdInStore$ = this.store.pipe(
      select(fromBookSelectors.entityExists, { id: this.bookId })
    );

    this.book$ = this.isbookIdInStore$.pipe(
      mergeMap((isbookIdInStore) => {
        if (!isbookIdInStore) {
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

}
