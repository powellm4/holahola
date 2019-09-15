import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from './+state/app.reducer';
import { loadApp } from './+state/app.actions';

@Component({
  selector: 'holahola-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'holahola';

  constructor(private store: Store<{ app: AppState }>) {
    this.store.dispatch(loadApp());
  }
}
