import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PresentationComponent,
    AboutComponent,
    SkillsComponent,
  ],
  exports: [
    HeaderComponent,
    PresentationComponent,
    AboutComponent,
    SkillsComponent,
  ],
  imports: [CommonModule, SwiperModule],
})
export class ComponentsModule {}
