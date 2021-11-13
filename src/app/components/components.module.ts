import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HeaderComponent, PresentationComponent, AboutComponent],
  exports: [HeaderComponent, PresentationComponent, AboutComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
