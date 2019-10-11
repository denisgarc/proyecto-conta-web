import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/service.index';
import { SessionService } from './services/shared/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged: boolean;

  constructor(public _ajuste: SettingsService,
    private sessionService: SessionService,
    private router: Router ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    const hasAccessToken = this.sessionService.hasValidAccessToken();
    if (!hasAccessToken) {
      this.router.navigate(['/login']);
      return;
    }

    // Redirect to home page
    this.router.navigate(['/dashboard']);
  }
}
