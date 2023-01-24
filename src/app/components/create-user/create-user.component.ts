import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PatientsService } from '../patients.service';
import { Users } from '../users';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  user: Users = {
    id: 0,
    name: '',
    email: '',
    password: '',
  };

  regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  newPassword = '';

  confirmPassword() {
    if (this.user.name === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite o seu nome!',
      });
      return;
    }
    if (this.user.email === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite o seu e-mail!',
      });
      return;
    }
    if (!this.user.email.match(this.regexEmail)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formato de e-mail inválido',
      });
      return;
    }
    if (this.user.password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite uma senha!',
      });
      return;
    }
    if (this.user.password.length <= 8) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sua senha deve possuir mais de 8 dígitos!',
      });
      return;
    }
    if (this.newPassword === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Confirme a sua senha!',
      });
      return;
    }
    if (this.user.password === this.newPassword) {
      this.createUser();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'As senhas não conferem!',
      });
      return;
    }
  }

  constructor(private service: PatientsService, private router: Router) {}

  ngOnInit(): void {}

  createUser() {
    this.service.createUser(this.user).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Bem-Vindo(a)!',
        text: 'Usuário cadastrado com sucesso!',
      });
      this.router.navigate(['/']);
    });
  }
}
