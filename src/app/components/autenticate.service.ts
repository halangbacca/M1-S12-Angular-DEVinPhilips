import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticateService {
  autenticated: boolean = false;

  authUser(): any {
    console.log(this.autenticated = !this.autenticated);
  }
}
