import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { ErrorMapper } from '../../mappers/general/error.mapper';
import { Parameter } from 'src/app/models/general/parameter.model';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private http: HttpClient, private auth: SessionService,
    private erroMap: ErrorMapper) { }

  public Get(endPoint: string, params?: Parameter[]): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      const Options = this.setHeaders();
      this.http.get(this.AddParameters(endPoint, params), Options)
        .subscribe(
          (success) => {
            if (success) {
              if (success['StatusCode'] === 200) {
                observer.next(success['Result']);
                observer.complete();
              } else {
                observer.error(this.erroMap.transFromServiceError(success));
                observer.complete();
              }
            } else {
              observer.error(success);
              observer.complete();
            }
          }, (error) => {
            observer.error(error);
            observer.complete();
          }
        );
    });
  }

  public Post(endPoint: string, Body: any) {
    return Observable.create((observer: Observer<any>) => {
      const Options = this.setHeaders();
      this.http.post(endPoint, Body, Options)
        .subscribe(
          (success) => {
            if (success) {
              if (success['StatusCode'] === 200) {
                observer.next(success['Result']);
                observer.complete();
              } else {
                observer.error(this.erroMap.transFromServiceError(success));
                observer.complete();
              }
            } else {
              observer.error(success);
              observer.complete();
            }
          }, (error) => {
            observer.error(error);
            observer.complete();
          }
        );
    });
  }

  private setHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.auth.authorizationHeader(),
        'Accept': 'application/json'
      })
    };
    return httpOptions;
  }

  private AddParameters(endPoint: string, params?: Parameter[]) {
    if (params === null || params === undefined) {
      return endPoint;
    }

    let query_string: string = '';
    params.forEach((param) => {
      query_string += param.name + '=' + param.value + '&';
    });

    console.log(query_string, 'query');

    return endPoint + '?' + query_string.substr(0, query_string.length - 1);
  }

}
