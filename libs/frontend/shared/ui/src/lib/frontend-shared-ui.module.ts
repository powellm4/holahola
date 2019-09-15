import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgxUiBootstrapModule } from '@ngx-ui/bootstrap';
import { VideoComponent } from './video/video.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule, NgxUiBootstrapModule],
  declarations: [TopNavComponent, VideoComponent, SideNavComponent],
  exports: [TopNavComponent, SideNavComponent, VideoComponent]
})
export class FrontendSharedUiModule {}
