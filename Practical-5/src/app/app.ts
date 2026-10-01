import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  periods = ['9AM-10AM', '10AM-11AM', '11AM-12PM', '12PM-1PM'];

  timetable: string[][] = [
    ['ML', 'FSD', 'SF', 'ASD'],
    ['FSD', 'ASD', 'ML', 'SF'],
    ['SF', 'ML', 'FSD', 'ASD'],
    ['ASD', 'SF', 'FSD', 'ML'],
    ['ML', 'SF', 'ASD', 'FSD']
  ];
}