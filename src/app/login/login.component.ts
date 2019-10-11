import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/shared/session.service';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: any = {
    username: '',
    password: ''
  };
  loading: boolean = false;
  msg: string;

  constructor(public router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {
    init_plugins();
  }

  logIn() {
    this.loading = true;
    if (this.model.username === '' || this.model.password === '') {
      this.msg = 'Debe ingresar los datos del usuario';
      this.loading = false;
      return;
    }

    this.sessionService.TryLogin(this.model.username, this.model.password)
      .subscribe(
        (success: boolean) => {
          if (success) {
            this.loading = true;
            this.router.navigate(['/dashboard']);
          }
        }, (error) => {
          this.loading = false;
          this.msg = error.message;
          console.error(error);
        }
      );
  }

  dismiss() {
    this.msg = null;
  }
}
