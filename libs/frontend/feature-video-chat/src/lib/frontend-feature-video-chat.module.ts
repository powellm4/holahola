import { VideoChatComponent } from './video-chat/video-chat.component';
import { FrontendSharedUiModule } from '@holahola/frontend/shared/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

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
    RouterModule.forChild(frontendFeatureVideoChatRoutes)
  ],
  declarations: [VideoChatComponent]
})
export class FrontendFeatureVideoChatModule {}
