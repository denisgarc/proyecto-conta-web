import { Injectable } from '@angular/core';
import { HttpProviderService } from '../shared/http-provider.service';
import { BrandMapper } from 'src/app/mappers/inventory/brand.mapper';
import { Endpoint } from 'src/config/endpoint';
import { Parameter } from 'src/app/models/general/parameter.model';
import { map, defaultIfEmpty, tap } from 'rxjs/operators';
import { Brand } from 'src/app/models/Inventory/Brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private serviceProvider: HttpProviderService,
    private mapper: BrandMapper) { }

  Get(): Observable<Array<Brand>> {
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Brand.Get)
        .pipe(
          map(response => this.mapper.transFromJson(response))
        );
  }

  GetById(id: number): Observable<Array<Brand>> {
    const param: Parameter[] = [
        { name: 'id', value: id.toString() }
    ];
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Brand.GetById, param)
        .pipe(
              map(response => this.mapper.transFromJson(response))
        );
  }

  Save(model: Brand) {
    return this.serviceProvider.Post(Endpoint.BaseApi + Endpoint.Brand.Save, model);
  }
}
