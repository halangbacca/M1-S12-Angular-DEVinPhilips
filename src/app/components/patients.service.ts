import { Appointments } from './appointments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from './patients';
import { Observable } from 'rxjs';
import { Exams } from './exams';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private readonly patientsUrl = 'http://localhost:3000/patients';
  private readonly examsUrl = 'http://localhost:3000/exams';
  private readonly appointmentsUrl = 'http://localhost:3000/appointments';
  private readonly usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  listUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);
  }

  listPatients(): Observable<Patients[]> {
    return this.http.get<Patients[]>(this.patientsUrl);
  }

  listExams(): Observable<Exams[]> {
    return this.http.get<Exams[]>(this.examsUrl);
  }

  listAppointents(): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(this.appointmentsUrl);
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

  createExam(exam: Exams): Observable<Exams> {
    return this.http.post<Exams>(this.examsUrl, exam);
  }

  createAppointment(appointment: Appointments): Observable<Appointments> {
    return this.http.post<Appointments>(this.appointmentsUrl, appointment);
  }

  createUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.usersUrl, user);
  }
}
