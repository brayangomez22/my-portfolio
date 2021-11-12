import { Component, OnInit, ElementRef } from '@angular/core';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _elementDom: ElementRef) {}

  ngOnInit(): void {
    particlesJS?.load('particles-js', '../assets/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });

    this.preloader();
  }

  public preloader() {
    setTimeout(() => {
      this._elementDom.nativeElement
        .querySelector('#loader')
        .classList.add('loader-loaded');
    }, 3000);
  }
}
