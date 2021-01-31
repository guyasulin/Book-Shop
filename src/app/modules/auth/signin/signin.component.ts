import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { User } from '../resources/auth';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public user: User;
  public sub: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(
      fromAuthActions.login({
        email: f.value.email,
        password: f.value.password,
      })
      );
  }
}
