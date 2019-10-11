import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoint } from 'src/config/endpoint';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Session } from 'src/app/models/general/session.model';
import { SessionMapper } from 'src/app/mappers/general/session.mapper';
import { ErrorMapper } from 'src/app/mappers/general/error.mapper';



@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient,
    private sessionMap: SessionMapper,
    private errorMap: ErrorMapper) { }

  TryLogin(User: string, Password: string): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      const Body = new URLSearchParams();
      Body.set('grant_type', 'password');
      Body.set('username', User);
      Body.set('password', Password);

      const Options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };

      this.http.post(Endpoint.Token, Body.toString(), Options)
        .subscribe(
          (success) => {
            if (success) {
              if (success['error'] === undefined) {
                this.SetSessionStorage(this.sessionMap.transFromJson(success));
                observer.next(true);
                observer.complete();
              } else {
                observer.error(this.errorMap.transFromTokenError(success));
                observer.complete();
              }
            } else {
              observer.error(success);
              observer.complete();
            }
          }, (error) => {
            if (error.error === null || error.error === undefined) {
              observer.error(this.errorMap.transFromBadRequest(error));
            } else {
              observer.error(this.errorMap.transFromTokenError(error.error));
            }

            observer.complete();
          }
        );
    });
  }

  LogOut() {
    sessionStorage.removeItem('Session');
  }

  SetSessionStorage(session: Session) {
    sessionStorage.setItem('Session', JSON.stringify(session));
  }

  GetSessionStorage(): Session {
    return JSON.parse(sessionStorage.getItem('Session'));
  }

  authorizationHeader(): string {
    const SesionModel: Session = this.GetSessionStorage();
    return SesionModel.token_type + ' ' + SesionModel.access_token;
  }

  hasValidAccessToken(): boolean {
    return !(sessionStorage.getItem('Session') === null || sessionStorage.getItem('Session') === undefined);
  }
}
