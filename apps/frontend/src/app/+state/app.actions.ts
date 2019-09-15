import { createAction, props } from '@ngrx/store';
import { AppEntity } from './app.models';

export const loadApp = createAction('[App] Load App');

export const loadAppSuccess = createAction(
  '[App] Load App Success',
  props<{ app: AppEntity[] }>()
);

export const loadAppFailure = createAction(
  '[App] Load App Failure',
  props<{ error: any }>()
);

export const showSecondSideNav = createAction('[App] Show Second Side Nav');

export const criticalError = createAction(
  '[App] Critical Error',
  props<{ error: any }>()
);
