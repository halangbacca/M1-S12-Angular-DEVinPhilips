import { Component, OnInit } from '@angular/core';
import { AutenticateService } from './components/autenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // autenticated: boolean = false;
  title = 'labmedical';

  constructor(private authService: AutenticateService) {}

  ngOnInit() {
    // console.log(this.autenticated = this.authService.authUser());
  }
}
