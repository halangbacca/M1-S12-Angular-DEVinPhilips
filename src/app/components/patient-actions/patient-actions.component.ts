import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Patients } from '../patients';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patient-actions',
  templateUrl: './patient-actions.component.html',
  styleUrls: ['./patient-actions.component.css'],
})
export class PatientActionsComponent {
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((patient) => {
      this.patient = patient;
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

  editPatient() {
    this.service.editPatient(this.patient).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Paciente editado com sucesso!',
      });
      this.router.navigate(['/']);
    });
  }

  deletePatient() {
    if (this.patient.id) {
      this.service.deletePatient(this.patient.id).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: 'Paciente deletado com sucesso!',
        });
        this.router.navigate(['/']);
      });
    }
  }
}
