import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'Angular Interpolation';
  username = 'DevUser';
  today = new Date();

  getGreeting(): string {
    return `Welcome back, ${this.username}!`;
  }
}