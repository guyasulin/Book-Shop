import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from '../modules/auth/resources/auth';
import { AppState } from '../store';
import * as fromAuthAction from '../store/actions/auth.actions'
import  * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private store: Store<AppState> ) { }
  user: Observable<User>

  ngOnInit(): void {
        this.store.dispatch(fromAuthAction.getUser());
  }
}
