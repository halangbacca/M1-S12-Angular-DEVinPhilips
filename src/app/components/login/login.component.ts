import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Users = {
    id: 0,
    email: '',
    password: '',
  };

  constructor(private service: PatientsService, private router: Router) {}

  ngOnInit(): void {}

  createUser() {
    this.service.createUser(this.user).subscribe(() => {
      alert('Usuário cadastrado com sucesso');
      this.router.navigate(['/']);
    });
  }
}
