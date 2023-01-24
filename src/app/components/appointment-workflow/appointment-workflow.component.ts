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
  filteredPatients: Patients[] = [];

  constructor(private service: PatientsService) {}

  ngOnInit(): void {
    this.service.listPatients().subscribe((workflow) => {
      this.workflow = workflow;
      this.filteredPatients = workflow;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.filteredPatients = this.workflow.filter((data: any) => {
      return (
        data.identification.name.toLowerCase().includes(value) ||
        data.id == (value)
      );
    });
  }
}
