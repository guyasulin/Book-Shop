import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { User } from '../resources/auth';
import  * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';
import * as fromAuthAction from '../../../store/actions/auth.actions';
import { AuthService } from '../resources/auth.service';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.scss']
})
export class AuthLinksComponent implements OnInit {
  user: any;
  vm$: Observable<fromAuthSelectors.AuthLinksViewModel>;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromAuthAction.getUser());
     this.vm$ = this.store.pipe(select(fromAuthSelectors.selectAuthLinksViewModel))
  }

  logout() {
    this.store.dispatch(fromAuthAction.logout());
  }
}
