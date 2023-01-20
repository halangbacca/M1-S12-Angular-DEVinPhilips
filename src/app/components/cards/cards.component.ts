import { Appointments } from './../appointments';
import { Exams } from './../exams';
import { PatientsService } from './../patients.service';
import { Component, OnInit } from '@angular/core';
import { Patients } from '../patients';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards: Patients[] = [];
  exams: Exams[] = [];
  appointments: Appointments[] = [];

  qtdExams: number = 0;
  qtdPatients: number = 0;
  qtdAppointments: number = 0;

  constructor(private service: PatientsService) {}

  ngOnInit(): void {
    this.service.listPatients().subscribe((patients) => {
      this.cards = patients;
      this.qtdPatients = this.cards.length;
    });
    this.service.listExams().subscribe((exams) => {
      this.exams = exams;
      this.qtdExams = this.exams.length;
    });
    this.service.listAppointents().subscribe((appointments) => {
      this.appointments = appointments;
      this.qtdAppointments = this.appointments.length;
    });
  }
}
