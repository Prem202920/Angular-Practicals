import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  studentNames: string[] = [
    'Amit',
    'Sumit',
    'Pranit',
    'Purohit',
    'Rohit',
    'Namit',
    'Shamit',
    'Mohit',
    'Ankit',
    'Sammohit'
  ];
}
