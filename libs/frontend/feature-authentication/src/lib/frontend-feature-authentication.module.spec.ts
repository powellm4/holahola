import { async, TestBed } from '@angular/core/testing';
import { FrontendFeatureAuthenticationModule } from './frontend-feature-authentication.module';
import { NgxUiBootstrapModule } from '@ngx-ui/bootstrap';

describe('FrontendFeatureAuthenticationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendFeatureAuthenticationModule, NgxUiBootstrapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendFeatureAuthenticationModule).toBeDefined();
  });
});
