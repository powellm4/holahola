import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgxUiBootstrapModule } from '@ngx-ui/bootstrap';

@NgModule({
  imports: [CommonModule, NgxUiBootstrapModule],
  declarations: [TopNavComponent],
  exports: [TopNavComponent]
})
export class FrontendSharedUiModule {}
