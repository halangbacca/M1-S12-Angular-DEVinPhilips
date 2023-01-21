import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patients } from '../patients';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patient-actions',
  templateUrl: './patient-actions.component.html',
  styleUrls: ['./patient-actions.component.css'],
})
export class PatientActionsComponent {
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
      alert('Paciente editado com sucesso');
      this.router.navigate(['/']);
    });
  }

  deletePatient() {
    if (this.patient.id) {
      this.service.deletePatient(this.patient.id).subscribe(() => {
        alert('Paciente deletado com sucesso');
        this.router.navigate(['/']);
      });
    }
  }
}
