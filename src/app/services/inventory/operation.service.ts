import { Injectable } from '@angular/core';
import { HttpProviderService } from '../shared/http-provider.service';
import { OperationMapper } from 'src/app/mappers/inventory/operation.mapper';
import { Endpoint } from 'src/config/endpoint';
import { Parameter } from 'src/app/models/general/parameter.model';
import { map, defaultIfEmpty, tap } from 'rxjs/operators';
import { Operation } from 'src/app/models/Inventory/Operation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private serviceProvider: HttpProviderService,
    private mapper: OperationMapper) { }

  Get(): Observable<Array<Operation>> {
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Operation.Get)
        .pipe(
          map(response => this.mapper.transFromJson(response))
        );
  }

  GetById(id: number): Observable<Array<Operation>> {
    const param: Parameter[] = [
        { name: 'id', value: id.toString() }
    ];
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Operation.GetById, param)
        .pipe(
              map(response => this.mapper.transFromJson(response))
        );
  }

}
