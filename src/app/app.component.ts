import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from './services/api_service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bajratodoangular';

  constructor(private apiService:APIServiceService,private router: Router) {
    if (apiService.loggedIn()) {
      router.navigate(['dashboard']);
    }
  }
}
