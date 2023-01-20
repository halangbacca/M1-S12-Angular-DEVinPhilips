import { Component } from '@angular/core';
import { Patients } from '../patients';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-appointment-workflow',
  templateUrl: './appointment-workflow.component.html',
  styleUrls: ['./appointment-workflow.component.css'],
})
export class AppointmentWorkflowComponent {
  workflow: Patients[] = [];

  constructor(private service: PatientsService) {}

  ngOnInit(): void {
    this.service.listPatients().subscribe((workflow => {
      return this.workflow = workflow;
    }));
  }
}