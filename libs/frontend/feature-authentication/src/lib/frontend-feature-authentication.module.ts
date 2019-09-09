import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiBootstrapModule } from '@ngx-ui/bootstrap';
import {
  NgxUtilityAuthenticationModule,
  AuthTestingService
} from '@ngx-utility/authentication';

export const frontendFeatureAuthenticationRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(frontendFeatureAuthenticationRoutes),
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    NgxUtilityAuthenticationModule.forRoot({
      useClass: AuthTestingService
    }),
    NgxUiBootstrapModule,
    NgbAlertModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent]
})
export class FrontendFeatureAuthenticationModule {}
