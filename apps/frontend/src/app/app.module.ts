import { AppEffects } from './+state/app.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { NxModule } from '@nrwl/angular';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { FrontendSharedUiModule } from '@holahola/frontend/shared/ui';
import * as fromApp from './+state/app.reducer';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@holahola/frontend/feature-authentication').then(
        mod => mod.FrontendFeatureAuthenticationModule
      )
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('@holahola/frontend/feature-video-chat').then(
        mod => mod.FrontendFeatureVideoChatModule
      )
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    NxModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    // StoreModule.forFeature(fromApp.APP_FEATURE_KEY, fromApp.reducer),
    FrontendSharedUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
