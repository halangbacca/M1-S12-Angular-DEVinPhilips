import { Appointments } from './../appointments';
import { Patients } from './../patients';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-appointment-registration',
  templateUrl: './appointment-registration.component.html',
  styleUrls: ['./appointment-registration.component.css'],
})
export class AppointmentRegistrationComponent implements OnInit {
  listPatients: Patients[] = [];
  filteredPatients: Patients[] = [];
  isSearch: boolean = false;

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
      care: '',
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

  appointment: Appointments = {
    id: 0,
    patientIdentification: '',
    patientName: '',
    doctorName: '',
    motive: '',
    date: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    time: formatDate(new Date(), 'H:mm:ss', 'en'),
    description: '',
    medication: '',
    precautions: '',
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
    this.isSearch = true;

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
    if (this.listPatients.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Cadastre um paciente',
        text: 'N??o h?? nenhum paciente cadastrado!',
      });
      return;
    }
    if (!this.isSearch) {
      Swal.fire({
        icon: 'error',
        title: 'Pesquise um paciente',
        text: 'Voc?? deve primeiro pesquisar um paciente!',
      });
      return;
    }
    if (this.appointment.motive === '') {
      Swal.fire({
        icon: 'error',
        title: 'Motivo da consulta',
        text: 'Insira o motivo da consulta do paciente!',
      });
      return;
    }
    if (this.appointment.motive.length > 64) {
      Swal.fire({
        icon: 'error',
        title: 'Motivo da consulta',
        text: 'O n??mero m??ximo de caracteres permitidos ?? 64!',
      });
      return;
    }
    if (this.appointment.motive.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Motivo da consulta',
        text: 'O n??mero m??nimo de caracteres permitidos ?? 8!',
      });
      return;
    }
    if (this.appointment.date === '') {
      Swal.fire({
        icon: 'error',
        title: 'Data da consulta',
        text: 'Insira a data da consulta do paciente!',
      });
      return;
    }
    if (this.appointment.time === '') {
      Swal.fire({
        icon: 'error',
        title: 'Hor??rio da consulta',
        text: 'Insira o hor??rio da consulta do paciente!',
      });
      return;
    }
    if (this.appointment.description === '') {
      Swal.fire({
        icon: 'error',
        title: 'Descri????o do problema',
        text: 'Insira a descri????o do problema do paciente!',
      });
      return;
    }
    if (this.appointment.description.length > 1024) {
      Swal.fire({
        icon: 'error',
        title: 'Descri????o do problema',
        text: 'O n??mero m??ximo de caracteres permitidos ?? 1024!',
      });
      return;
    }
    if (this.appointment.description.length < 16) {
      Swal.fire({
        icon: 'error',
        title: 'Descri????o do problema',
        text: 'O n??mero m??nimo de caracteres permitidos ?? 16!',
      });
      return;
    }
    if (this.appointment.precautions === '') {
      Swal.fire({
        icon: 'error',
        title: 'Dosagem e precau????es',
        text: 'Insira a dosagem adequada e as precau????es referentes ao medicamento receitado ao paciente!',
      });
      return;
    }
    if (this.appointment.precautions.length > 256) {
      Swal.fire({
        icon: 'error',
        title: 'Dosagem e precau????es',
        text: 'O n??mero m??ximo de caracteres permitidos ?? 256!',
      });
      return;
    }
    if (this.appointment.precautions.length < 16) {
      Swal.fire({
        icon: 'error',
        title: 'Dosagem e precau????es',
        text: 'O n??mero m??nimo de caracteres permitidos ?? 16!',
      });
      return;
    }
    this.appointment.patientIdentification = this.patient.identification.cpf;
    this.appointment.patientName = this.patient.identification.name;

    let doctorName = localStorage.getItem('user');
    this.appointment.doctorName = JSON.parse(doctorName!);

    this.service.createAppointment(this.appointment).subscribe(() => {
      localStorage.setItem('session', JSON.stringify('Cadastro de Exames'));
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Consulta cadastrada com sucesso!',
      });
      this.router.navigate(['/cadastro-de-exame']);
    });
  }

  cancel() {
    localStorage.setItem(
      'session',
      JSON.stringify('Estat??sticas e Informa????es')
    );
    this.router.navigate(['/']);
  }
}
