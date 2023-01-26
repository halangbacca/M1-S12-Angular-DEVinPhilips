import { Component, OnInit } from '@angular/core';
import { AutenticateService } from './components/autenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  autenticated = false;
  title = 'labmedical';

  constructor(private authService: AutenticateService) {}

  ngOnInit() {}

  ngDoCheck() {
    if (this.authService.autenticated) {
      this.autenticated = true;
    } else {
      this.autenticated = false;
    }
  }
}
