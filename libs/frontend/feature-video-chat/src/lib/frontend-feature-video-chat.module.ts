import { VideoChatComponent } from './video-chat/video-chat.component';
import { FrontendSharedUiModule } from '@holahola/frontend/shared/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

export const frontendFeatureVideoChatRoutes: Route[] = [
  {
    path: '',
    component: VideoChatComponent
  },
  {
    path: 'friends',
    component: VideoChatComponent
  },
  {
    path: 'recent',
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
