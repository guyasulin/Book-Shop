import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/auth/resources/auth';
import { AppState } from 'src/app/store';
import * as fromHeaderSelectors from 'src/app/store/selectors/header.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public vm$: Observable<fromHeaderSelectors.HeaderViewModel>;
  public user: User;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(fromHeaderSelectors.selectHeaderViewModel));
  }

}
