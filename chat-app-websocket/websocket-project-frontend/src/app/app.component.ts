import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // The entered username
  username = '';
  // will hold a random theme for the chat component
  selectedTheme = '';
  // will hold a random avatar for the chat component
  selectedAvatar = '';
  // Detect when the user clicked on 'START'
  isReady = false;
  // List of themes and avatars to pass one randomly to the chat component
  themes = ['primary', 'warning', 'info', 'success'];
  avatars = [
    '/assets/img/1.png',
    '/assets/img/2.png',
    '/assets/img/3.png',
    '/assets/img/4.png',
    '/assets/img/5.png',
    '/assets/img/6.png',
    '/assets/img/7.png'
  ];

  // Select one random avatar and theme for every chat component
  constructor(private _router: Router) {
    this.selectedTheme = this.getTheme();
    this.selectedAvatar = this.getAvatar();
  }

  // Get random theme
  getTheme() {
    return this.themes[Math.floor(Math.random() * this.themes.length)];
  }

  // Get random avatar
  getAvatar() {
    return this.avatars[Math.floor(Math.random() * this.avatars.length)];
  }

  // show the chat component
  chat() {
    this.isReady = true;
  }
}
