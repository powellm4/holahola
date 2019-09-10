import { async, TestBed } from '@angular/core/testing';
import { FrontendFeatureVideoChatModule } from './frontend-feature-video-chat.module';

describe('FrontendFeatureVideoChatModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendFeatureVideoChatModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendFeatureVideoChatModule).toBeDefined();
  });
});
