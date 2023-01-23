import { PatientActionsComponent } from './components/patient-actions/patient-actions.component';
import { CardsComponent } from './components/cards/cards.component';
import { PatientWorkflowComponent } from './components/patient-workflow/patient-workflow.component';
import { AppointmentWorkflowComponent } from './components/appointment-workflow/appointment-workflow.component';
import { AppointmentRegistrationComponent } from './components/appointment-registration/appointment-registration.component';
import { ExamRegistrationComponent } from './components/exam-registration/exam-registration.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: CardsComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  { path: 'exam-registration', component: ExamRegistrationComponent },
  {
    path: 'appointment-registration',
    component: AppointmentRegistrationComponent,
  },
  { path: 'appointment-workflow', component: AppointmentWorkflowComponent },
  { path: 'patient-workflow', component: PatientWorkflowComponent },
  { path: 'patient-actions/:id', component: PatientActionsComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
