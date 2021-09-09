import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { HomeState } from '../states/home.state';

export const selectHomeFeature = createFeatureSelector<AppState, HomeState>(
  'home'
);

export const isCreatingNewPrototype = createSelector(
  selectHomeFeature,
  (state: HomeState) => state.createNewPrototype
);
