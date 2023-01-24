import { Patients } from './../patients';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-registration',
  templateUrl: './appointment-registration.component.html',
  styleUrls: ['./appointment-registration.component.css'],
})
export class AppointmentRegistrationComponent implements OnInit {
  listPatients: Patients[] = [];
  filteredPatients: Patients[] = [];

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

  constructor(private service: PatientsService, private router: Router) {}

  ngOnInit(): void {
    this.service.listPatients().subscribe((patients) => {
      this.listPatients = patients;
      this.filteredPatients = patients;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.filteredPatients = this.listPatients.filter((data: any) => {
      return (
        data.identification.name.toLowerCase().includes(value) ||
        data.identification.phone.toLowerCase().includes(value) ||
        data.identification.email.toLowerCase().includes(value)
      );
    });

    this.filteredPatients.forEach((value) => (this.patient = value));
  }

  createAppointment() {
    if (this.patient.appointments[0].motive === '') {
      Swal.fire({
        icon: 'error',
        title: 'Motivo da consulta',
        text: 'Insira o motivo da consulta do paciente!',
      });
      return;
    }
    if (this.patient.appointments[0].motive.length > 64) {
      Swal.fire({
        icon: 'error',
        title: 'Motivo da consulta',
        text: 'O número máximo de caracteres permitidos é 64!',
      });
      return;
    }
    if (this.patient.appointments[0].motive.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Motivo da consulta',
        text: 'O número mínimo de caracteres permitidos é 8!',
      });
      return;
    }
    if (this.patient.appointments[0].date === '') {
      Swal.fire({
        icon: 'error',
        title: 'Data da consulta',
        text: 'Insira a data da consulta do paciente!',
      });
      return;
    }
    if (this.patient.appointments[0].time === '') {
      Swal.fire({
        icon: 'error',
        title: 'Horário da consulta',
        text: 'Insira o horário da consulta do paciente!',
      });
      return;
    }
    if (this.patient.appointments[0].description === '') {
      Swal.fire({
        icon: 'error',
        title: 'Descrição do problema',
        text: 'Insira a descrição do problema do paciente!',
      });
      return;
    }
    if (this.patient.appointments[0].description.length > 1024) {
      Swal.fire({
        icon: 'error',
        title: 'Descrição do problema',
        text: 'O número máximo de caracteres permitidos é 1024!',
      });
      return;
    }
    if (this.patient.appointments[0].description.length < 16) {
      Swal.fire({
        icon: 'error',
        title: 'Descrição do problema',
        text: 'O número mínimo de caracteres permitidos é 16!',
      });
      return;
    }
    if (this.patient.appointments[0].precautions === '') {
      Swal.fire({
        icon: 'error',
        title: 'Dosagem e precauções',
        text: 'Insira a dosagem adequada e as precauções referentes ao medicamento receitado ao paciente!',
      });
      return;
    }
    if (this.patient.appointments[0].precautions.length > 256) {
      Swal.fire({
        icon: 'error',
        title: 'Dosagem e precauções',
        text: 'O número máximo de caracteres permitidos é 256!',
      });
      return;
    }
    if (this.patient.appointments[0].precautions.length < 16) {
      Swal.fire({
        icon: 'error',
        title: 'Dosagem e precauções',
        text: 'O número mínimo de caracteres permitidos é 16!',
      });
      return;
    }
    this.service.createAppointment(this.patient).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Consulta cadastrada com sucesso!',
      });
      this.router.navigate(['/exam-registration']);
    });
  }
}
