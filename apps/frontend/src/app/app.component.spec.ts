import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './+state/app.reducer';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NxModule } from '@nrwl/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FrontendSharedUiModule } from '@holahola/frontend/shared/ui';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        FrontendSharedUiModule,
        NxModule.forRoot(),
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
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forFeature(fromApp.APP_FEATURE_KEY, fromApp.reducer)
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'holahola'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('holahola');
  });

  it('should render title in a holahola-top-nav tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('holahola-top-nav').textContent).toContain(
      'holahola'
    );
  });
});
