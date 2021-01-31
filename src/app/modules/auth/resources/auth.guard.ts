import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectUserData } from 'src/app/store/selectors/auth.selectors';
import { User } from './auth';
import  * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';
import * as fromAuthAction from '../../../store/actions/auth.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) {}

  user = localStorage.getItem('user');
  vm$: Observable<fromAuthSelectors.AuthLinksViewModel>;
  
  canActivate(): boolean {
    this.store.pipe(select(fromAuthSelectors.selectAuthLinksViewModel)).subscribe(res => {
      if (!res.isLoggedin) {
        this.router.navigate(['/home']);
        return false;
      }
    })
    return true;
  }
}
