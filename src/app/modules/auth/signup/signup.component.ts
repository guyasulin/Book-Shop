import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private store: Store<AppState>

  ) { }

  ngOnInit(): void {}
  
  onSubmit(f: NgForm) {
    this.store.dispatch(
      fromAuthActions.register({
        email: f.value.email,
        password: f.value.password,
      })
    );
  }
}
