import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticateService {
  autenticated = false;

  authUser() {
    this.autenticated = true;
  }

  logoutUser(){
    this.autenticated = false;
  }
}
