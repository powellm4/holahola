import { VideoChatComponent } from './video-chat/video-chat.component';
import { FrontendSharedUiModule } from '@holahola/frontend/shared/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromVideoChat from './+state/video-chat.reducer';
import { VideoChatEffects } from './+state/video-chat.effects';

export const frontendFeatureVideoChatRoutes: Route[] = [
  {
    path: '',
    component: VideoChatComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FrontendSharedUiModule,
    RouterModule.forChild(frontendFeatureVideoChatRoutes),
    StoreModule.forFeature(
      fromVideoChat.VIDEOCHAT_FEATURE_KEY,
      fromVideoChat.reducer
    ),
    EffectsModule.forFeature([VideoChatEffects])
  ],
  declarations: [VideoChatComponent]
})
export class FrontendFeatureVideoChatModule {}
