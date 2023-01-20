import { PatientsService } from './../patients.service';
import { Component, OnInit } from '@angular/core';
import { Patients } from '../patients';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent implements OnInit {
  patient: Patients = {
    id: 0,
    identification: {
      name: '',
      gender: '',
      birth: '',
      cpf: '',
      rg: '',
      relationship: '',
      phone: '',
      email: '',
      nationality: '',
      allergy: '',
      emergencyContact: '',
    },
    insurance: {
      name: '',
      number: '',
      validity: '',
    },
    address: {
      cep: '',
      city: '',
      state: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      reference: '',
    },
  };

  constructor(private service: PatientsService, private router: Router) {}

  ngOnInit(): void {}

  createPatient() {
    this.service.createPatient(this.patient).subscribe(() => {
      alert('Paciente cadastrado com sucesso');
      this.router.navigate(['/appointment-registration']);
    });
  }

  editPatient() {}

  deletePatient() {
    if (this.patient.id) {
      this.service.deletePatient(this.patient.id).subscribe(() => {
        alert('Paciente deletado com sucesso');
        this.router.navigate(['/']);
      });
    }
  }
}
