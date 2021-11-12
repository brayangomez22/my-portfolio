import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [HeaderComponent, PresentationComponent],
  exports: [HeaderComponent, PresentationComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
