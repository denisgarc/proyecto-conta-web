import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService, SidebarService, HttpProviderService, SessionService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    HttpProviderService,
    SessionService
  ],
  declarations: []
})
export class ServiceModule { }
