import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';
import { HomeState } from '../states/home.state';

export const initialState: HomeState = {
  createNewPrototype: false,
  openPrototype: false,
};

const homeReducer = createReducer(
  initialState,
  on(HomeActions.createNewPrototype, (state: HomeState) => ({
    ...state,
    createNewPrototype: true,
    openPrototype: false,
  }))
);

export function reducer(state: HomeState | undefined, action: Action) {
  return homeReducer(state, action);
}
