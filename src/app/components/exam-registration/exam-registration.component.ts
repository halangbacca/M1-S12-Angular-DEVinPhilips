import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Patients } from '../patients';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css'],
})
export class ExamRegistrationComponent implements OnInit {
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

  ngOnInit(): void {}

  createExam() {
    this.service.createExam(this.patient).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Exame cadastrado com sucesso!',
      });
      this.router.navigate(['/appointment-workflow']);
    });
  }
}
