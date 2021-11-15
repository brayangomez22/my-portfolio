import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public sections!: ElementRef[];

  constructor(private _elementDom: ElementRef) {}

  ngOnInit(): void {
    this.sections =
      this._elementDom.nativeElement.querySelectorAll('section[id]');

    window.addEventListener('scroll', this.scrollActive);
  }

  public scrollActive() {
    const scrollY = window.pageYOffset;

    this.sections?.forEach((current: any) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        this._elementDom.nativeElement
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.add('nav__link-active');
      } else {
        this._elementDom.nativeElement
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.remove('nav__link-active');
      }
    });
  }
}
