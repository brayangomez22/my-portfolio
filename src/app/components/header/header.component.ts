import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  constructor(private _element: ElementRef) {}

  public showMenu() {
    this._element.nativeElement
      .querySelector('#nav-menu')
      .classList.add('show-menu');
  }

  public closeMenu() {
    this._element.nativeElement
      .querySelector('#nav-menu')
      .classList.remove('show-menu');
  }
}
