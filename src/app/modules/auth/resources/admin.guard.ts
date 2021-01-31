import { tap } from 'rxjs/operators';
import { User } from './auth';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectUserData } from 'src/app/store/selectors/auth.selectors';
import * as fromAuthAction from '../../../store/actions/auth.actions'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  public user:User;

  constructor(
    private router: Router,
    private store: Store<AppState>,
     private authService: AuthService
    ) {
   }
    
   canActivate(): boolean {
      this.authService.getUser().subscribe(res => {
        this.user = res.currentUser;
        console.log(this.user.admin);
        if (!this.user.admin) {
          this.router.navigate(['/home']);
          return false
        }
      })
      return true;
   }
  
}
