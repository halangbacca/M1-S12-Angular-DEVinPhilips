import { CardsComponent } from './components/cards/cards.component';
import { PatientWorkflowComponent } from './components/patient-workflow/patient-workflow.component';
import { AppointmentWorkflowComponent } from './components/appointment-workflow/appointment-workflow.component';
import { AppointmentRegistrationComponent } from './components/appointment-registration/appointment-registration.component';
import { ExamRegistrationComponent } from './components/exam-registration/exam-registration.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: CardsComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  { path: 'exam-registration', component: ExamRegistrationComponent },
  { path: 'appointment-registration', component: AppointmentRegistrationComponent },
  { path: 'appointment-workflow', component: AppointmentWorkflowComponent },
  { path: 'patient-workflow', component: PatientWorkflowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
