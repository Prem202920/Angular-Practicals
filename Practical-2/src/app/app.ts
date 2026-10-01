import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  timetable = [
    {
      time: '9:00 AM',
      task: 'Angular Lecture'
    },
    {
      time: '10:00 AM',
      task: 'Database Practical'
    },
    {
      time: '11:00 AM',
      task: 'Break'
    },
    {
      time: '12:00 PM',
      task: 'React Practical'
    },
    {
      time: '1:00 PM',
      task: 'Lunch Break'
    }
  ];
}