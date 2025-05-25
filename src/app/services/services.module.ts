import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowbiteService } from './flowbite.service';
import { BrowserStorageService } from './browser-storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [FlowbiteService, BrowserStorageService],
})
export class ServicesModule {}
