import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, NopagefoundComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
