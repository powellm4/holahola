import { async, TestBed } from '@angular/core/testing';
import { FrontendSharedUiModule } from './frontend-shared-ui.module';

describe('FrontendSharedUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendSharedUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendSharedUiModule).toBeDefined();
  });
});
