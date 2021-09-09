import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './interfaces/app-state.interface';
import * as HomeActions from './redux/actions/home.actions';
import * as HomeSelectors from './redux/selectors/home.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  createNewPrototype$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.createNewPrototype$ = this.store.select(
      HomeSelectors.isCreatingNewPrototype
    );
  }

  createNewPrototype(): void {
    this.store.dispatch(HomeActions.createNewPrototype());
  }
}
