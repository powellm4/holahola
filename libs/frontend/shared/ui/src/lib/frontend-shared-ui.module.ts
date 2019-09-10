import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgxUiBootstrapModule } from '@ngx-ui/bootstrap';
import { VideoComponent } from './video/video.component';

@NgModule({
  imports: [CommonModule, NgxUiBootstrapModule],
  declarations: [TopNavComponent, VideoComponent],
  exports: [TopNavComponent, VideoComponent]
})
export class FrontendSharedUiModule {}
