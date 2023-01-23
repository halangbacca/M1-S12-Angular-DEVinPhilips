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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.userObj = JSON.parse(this.user);
  }

  logout() {
    this.userObj = [];
    localStorage.setItem('user', JSON.stringify(this.userObj));
    Swal.fire({
      icon: 'success',
      title: 'Volte logo!',
      text: 'Logout efetuado com sucesso!',
      timer: 2000,
      timerProgressBar: true,
    });
    this.router.navigate(['/login']);
  }
}
