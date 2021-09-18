import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppState } from './interfaces/app-state.interface';
import * as HomeActions from './redux/actions/home.actions';
import * as HomeSelectors from './redux/selectors/home.selectors';

export interface User {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  createNewPrototype$!: Observable<boolean>;

  // component related variables
  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions!: Observable<User[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.createNewPrototype$ = this.store.select(
      HomeSelectors.isCreatingNewPrototype
    );

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  createNewPrototype(): void {
    this.store.dispatch(HomeActions.createNewPrototype());
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
