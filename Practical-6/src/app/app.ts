import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  students = [
    {
      name: 'Virat Kohli',
      course: 'M.Sc. Computer Science',
      skills: 'HTML, CSS, JavaScript',
      project: 'Student Management System',
      email: 'virat@gmail.com'
    },
    {
      name: 'Prem Patil',
      course: 'M.Sc. Computer Science',
      skills: 'Angular, TypeScript, Bootstrap',
      project: 'Online Shopping Website',
      email: 'prem@gmail.com'
    },
    {
      name: 'Rohan Joshi',
      course: 'M.Sc. Computer Science',
      skills: 'Python, Machine Learning',
      project: 'Student Performance Prediction',
      email: 'rohan@gmail.com'
    }
  ];
}