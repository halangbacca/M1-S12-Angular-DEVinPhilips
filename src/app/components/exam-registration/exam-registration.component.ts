import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exams } from '../exams';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css'],
})
export class ExamRegistrationComponent implements OnInit {
  exam: Exams = {
    id: 0,
    patientId: 0,
    name: '',
    date: '',
    time: '',
    type: '',
    lab: '',
    url: '',
    result: '',
  };

  constructor(private service: PatientsService, private router: Router) {}

  ngOnInit(): void {}

  createExam() {
    this.service.createExam(this.exam).subscribe(() => {
      alert('Exame cadastrado com sucesso');
      this.router.navigate(['/appointment-workflow']);
    });
  }
}
