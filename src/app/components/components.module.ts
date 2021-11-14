import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { TradesComponent } from './trades/trades.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PresentationComponent,
    AboutComponent,
    SkillsComponent,
    TradesComponent,
    PortfolioComponent,
  ],
  exports: [
    HeaderComponent,
    PresentationComponent,
    AboutComponent,
    SkillsComponent,
    TradesComponent,
    PortfolioComponent,
  ],
  imports: [CommonModule, SwiperModule],
})
export class ComponentsModule {}
