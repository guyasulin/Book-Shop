import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../store';
import  * as fromAuthSelectors from '../../../store/selectors/auth.selectors';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) {}

  
  canActivate(): boolean {
    this.store.pipe(select(fromAuthSelectors.selectUserData)).subscribe(res => {
      if (!res.id) {
        this.router.navigate(['/home']);
        return false;
      }
    })
    return true;
  }
}
