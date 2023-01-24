import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  user: any;
  userObj: any;
  currentSession = [
    'Estatísticas e Informações',
    'Cadastro de Paciente',
    'Edição de Paciente',
    'Cadastro de Consulta',
    'Cadastro de Exame',
    'Listagem de Prontuários',
    'Prontuário do Paciente',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.userObj = JSON.parse(this.user);
  }

  home() {
    localStorage.setItem('session', JSON.stringify(this.currentSession[0]));
    this.router.navigate(['/home']);
  }

  examRegistration() {
    localStorage.setItem('session', JSON.stringify(this.currentSession[4]));
    this.router.navigate(['/exam-registration']);
  }

  patientRegistration() {
    localStorage.setItem('session', JSON.stringify(this.currentSession[1]));
    this.router.navigate(['/patient-registration']);
  }

  createAppointment() {
    localStorage.setItem('session', JSON.stringify(this.currentSession[3]));
    this.router.navigate(['/appointment-registration']);
  }

  appointmentWorkflow() {
    localStorage.setItem('session', JSON.stringify(this.currentSession[5]));
    this.router.navigate(['/appointment-workflow']);
  }

  logout() {
    localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: 'Volte logo!',
      text: 'Logout efetuado com sucesso!',
      timer: 2000,
      timerProgressBar: true,
    });
    this.router.navigate(['/']);
  }
}
