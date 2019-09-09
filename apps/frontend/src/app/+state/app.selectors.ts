import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  APP_FEATURE_KEY,
  AppState,
  AppPartialState,
  appAdapter
} from './app.reducer';

// Lookup the 'App' feature state managed by NgRx
export const getAppState = createFeatureSelector<AppPartialState, AppState>(
  APP_FEATURE_KEY
);

const { selectAll, selectEntities } = appAdapter.getSelectors();

export const getAppLoaded = createSelector(
  getAppState,
  (state: AppState) => state.loaded
);

export const getAppError = createSelector(
  getAppState,
  (state: AppState) => state.error
);

export const getAllApp = createSelector(
  getAppState,
  (state: AppState) => selectAll(state)
);

export const getAppEntities = createSelector(
  getAppState,
  (state: AppState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAppState,
  (state: AppState) => state.selectedId
);

export const getSelected = createSelector(
  getAppEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
