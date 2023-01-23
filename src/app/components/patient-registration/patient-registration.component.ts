import { CepService } from './../cep.service';
import { PatientsService } from './../patients.service';
import { Component, OnInit } from '@angular/core';
import { Patients } from '../patients';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent implements OnInit {
  patient: Patients = {
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
    exams: [
      {
        name: '',
        date: '',
        time: '',
        type: '',
        lab: '',
        url: '',
        result: '',
      },
    ],
    appointments: [
      {
        motive: '',
        date: '',
        time: '',
        description: '',
        medication: '',
        precautions: '',
      },
    ],
  };

  constructor(
    private service: PatientsService,
    private router: Router,
    private cep: CepService
  ) {}

  ngOnInit(): void {
    console.log(this.cep.search(this.patient.address.cep));
  }

  createPatient() {
    this.service.createPatient(this.patient).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Paciente cadastrado com sucesso!',
      });
      this.router.navigate(['/appointment-registration']);
    });
  }
}
