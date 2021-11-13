import { Component, OnInit } from '@angular/core';

import SwiperCore, { SwiperOptions, EffectFade } from 'swiper';
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [],
})
export class SkillsComponent implements OnInit {
  config: SwiperOptions = {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,
  };

  constructor() {}

  ngOnInit(): void {}
}
