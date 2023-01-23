import { PatientsService } from './../patients.service';
import { Component, OnInit } from '@angular/core';
import { Patients } from '../patients';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  patients: Patients[] = [];

  qtdExams: number = 0;
  qtdPatients: number = 0;
  qtdAppointments: number = 0;

  constructor(private service: PatientsService) {}

  ngOnInit(): void {
    this.service.listPatients().subscribe((patients) => {
      this.patients = patients;
      this.qtdPatients = patients.length;
    });
    this.service.listPatients().subscribe((patients) => {
      patients.forEach((patient) => {
        this.qtdExams = patient.exams.length;
      });
    });
    this.service.listPatients().subscribe((patients) => {
      patients.forEach((patient) => {
        this.qtdAppointments = patient.appointments.length;
      });
    });
  }
}
