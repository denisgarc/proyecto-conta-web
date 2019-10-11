import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.sessionService.LogOut();
    this.router.navigate(['/login']);
  }

}
