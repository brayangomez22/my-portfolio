import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    particlesJS?.load('particles-js', '../assets/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }
}
