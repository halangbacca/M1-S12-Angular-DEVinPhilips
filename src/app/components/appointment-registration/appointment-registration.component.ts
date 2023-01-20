import { Appointments } from './../appointments';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-appointment-registration',
  templateUrl: './appointment-registration.component.html',
  styleUrls: ['./appointment-registration.component.css'],
})
export class AppointmentRegistrationComponent implements OnInit {
  appointment: Appointments = {
    id: 0,
    patientId: 0,
    motive: '',
    date: '',
    time: '',
    description: '',
    medication: '',
    precautions: '',
  };

  constructor(private service: PatientsService, private router: Router) {}

  ngOnInit(): void {}

  createAppointment() {
    this.service.createAppointment(this.appointment).subscribe(() => {
      alert('Consulta cadastrada com sucesso');
      this.router.navigate(['/exam-registration']);
    });
  }
}
