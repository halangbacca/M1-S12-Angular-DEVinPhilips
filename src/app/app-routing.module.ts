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
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '', component: CardsComponent, canActivate: [LoginGuard] },

  { path: 'login', component: LoginComponent },

  {
    path: 'patient-registration',
    component: PatientRegistrationComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'exam-registration',
    component: ExamRegistrationComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'appointment-registration',
    component: AppointmentRegistrationComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'appointment-workflow',
    component: AppointmentWorkflowComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'patient-workflow',
    component: PatientWorkflowComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'patient-actions/:id',
    component: PatientActionsComponent,
    canActivate: [LoginGuard],
  },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
