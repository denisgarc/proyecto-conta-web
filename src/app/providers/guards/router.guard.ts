import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/service.index';

@Injectable({
  providedIn: 'root'
})
export class RouterAuthGuard implements CanActivate {

  constructor(private sessionService: SessionService,
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const hasValidAccessToken = this.sessionService.hasValidAccessToken();
    if (!hasValidAccessToken) {
      this.sessionService.LogOut();
      setTimeout(() => {
        return false;
      }, 1000);
    }
    return (hasValidAccessToken);
  }
}
