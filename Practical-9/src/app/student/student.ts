import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student implements OnInit {

  studentId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id') || '';
  }
}