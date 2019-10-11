import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { SessionService } from '../../services/shared/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _sidebar: SidebarService,
    private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.sessionService.LogOut();
    this.router.navigate(['/login']);
  }

}
