import { Injectable } from '@angular/core';
import { HttpProviderService } from '../shared/http-provider.service';
import { CardexMapper } from 'src/app/mappers/inventory/cardex.mapper';
import { Endpoint } from 'src/config/endpoint';
import { Parameter } from 'src/app/models/general/parameter.model';
import { map, defaultIfEmpty, tap } from 'rxjs/operators';
import { Cardex } from 'src/app/models/Inventory/Cardex';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardexService {

  constructor(private serviceProvider: HttpProviderService,
    private mapper: CardexMapper) { }

  Get(): Observable<Array<Cardex>> {
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Cardex.Get)
        .pipe(
          map(response => this.mapper.transFromJson(response))
        );
  }

  GetById(id: number): Observable<Array<Cardex>> {
    const param: Parameter[] = [
        { name: 'id', value: id.toString() }
    ];
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Cardex.GetById, param)
        .pipe(
          map(response => this.mapper.transFromJson(response))
        );
  }

  Save(model: Cardex) {
    return this.serviceProvider.Post(Endpoint.BaseApi + Endpoint.Cardex.Save, model);
  }
}
