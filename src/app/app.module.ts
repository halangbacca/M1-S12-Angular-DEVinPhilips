import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppointmentWorkflowComponent } from './components/appointment-workflow/appointment-workflow.component';
import { LoginComponent } from './components/login/login.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { ExamRegistrationComponent } from './components/exam-registration/exam-registration.component';
import { AppointmentRegistrationComponent } from './components/appointment-registration/appointment-registration.component';
import { PatientWorkflowComponent } from './components/patient-workflow/patient-workflow.component';
import { CardsComponent } from './components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgePipe } from './components/age.pipe';
import { PatientActionsComponent } from './components/patient-actions/patient-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AppointmentWorkflowComponent,
    LoginComponent,
    PatientRegistrationComponent,
    ExamRegistrationComponent,
    AppointmentRegistrationComponent,
    PatientWorkflowComponent,
    CardsComponent,
    AgePipe,
    PatientActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
