import { Appointments } from './../appointments';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exams } from '../exams';
import { Patients } from '../patients';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patient-workflow',
  templateUrl: './patient-workflow.component.html',
  styleUrls: ['./patient-workflow.component.css'],
})
export class PatientWorkflowComponent {
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

  exams: Exams[] = [];
  filteredExams: Exams[] = [];

  appointments: Appointments[] = [];
  filteredAppointments: Appointments[] = [];

  constructor(
    private service: PatientsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    localStorage.setItem('session', JSON.stringify('Prontuário do Paciente'));

    const patientId = this.route.snapshot.paramMap.get('id');

    this.service
      .searchPatientById(parseInt(patientId!))
      .subscribe((patient) => {
        this.patient = patient;
      });

    this.service.listExams().subscribe((exam) => {
      this.exams = exam;

      this.filteredExams = this.exams.filter((value) => {
        return (
          value.patientIdentification
            .toLowerCase()
            .includes(this.patient.identification.cpf.toLowerCase()) &&
          value.patientName
            .toLowerCase()
            .includes(this.patient.identification.name.toLowerCase())
        );
      });
    });

    this.service.listAppointments().subscribe((appointment) => {
      this.appointments = appointment;

      this.filteredAppointments = this.appointments.filter((value) => {
        return (
          value.patientIdentification
            .toLowerCase()
            .includes(this.patient.identification.cpf.toLowerCase()) &&
          value.patientName
            .toLowerCase()
            .includes(this.patient.identification.name.toLowerCase())
        );
      });
    });
  }
}
