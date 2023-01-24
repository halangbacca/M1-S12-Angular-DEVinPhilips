import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from './patients';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private readonly patientsUrl = 'http://localhost:3000/patients';
  private readonly usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  listUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);
  }

  listPatients(): Observable<Patients[]> {
    return this.http.get<Patients[]>(this.patientsUrl);
  }

  createPatient(patient: Patients): Observable<Patients> {
    return this.http.post<Patients>(this.patientsUrl, patient);
  }

  deletePatient(id: number): Observable<Patients> {
    const url = `${this.patientsUrl}/${id}`;
    return this.http.delete<Patients>(url);
  }

  editPatient(patient: Patients): Observable<Patients> {
    const url = `${this.patientsUrl}/${patient.id}`;
    return this.http.put<Patients>(url, patient);
  }

  searchById(id: number): Observable<Patients> {
    const url = `${this.patientsUrl}/${id}`;
    return this.http.get<Patients>(url);
  }

  createExam(exam: Patients): Observable<Patients> {
    const url = `${this.patientsUrl}/${exam.id}`;
    return this.http.put<Patients>(url, exam);
  }

  deleteExam(exam: Patients): Observable<Patients> {
    const url = `${this.patientsUrl}/${exam.id}`;
    return this.http.delete<Patients>(url);
  }

  deleteAppointment(appointment: Patients): Observable<Patients> {
    const url = `${this.patientsUrl}/${appointment.id}`;
    return this.http.delete<Patients>(url);
  }

  createAppointment(appointment: Patients): Observable<Patients> {
    const url = `${this.patientsUrl}/${appointment.id}`;
    return this.http.put<Patients>(url, appointment);
  }

  createUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.usersUrl, user);
  }
}
