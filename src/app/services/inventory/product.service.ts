import { Injectable } from '@angular/core';
import { HttpProviderService } from '../shared/http-provider.service';
import { ProductMapper } from 'src/app/mappers/inventory/product.mapper';
import { Endpoint } from 'src/config/endpoint';
import { Parameter } from 'src/app/models/general/parameter.model';
import { map, defaultIfEmpty, tap } from 'rxjs/operators';
import { Product } from 'src/app/models/Inventory/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private serviceProvider: HttpProviderService,
    private mapper: ProductMapper) { }

  Get(): Observable<Array<Product>> {
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Product.Get)
        .pipe(
          map(response => this.mapper.transFromJson(response))
        );
  }

  GetById(id: number): Observable<Array<Product>> {
    const param: Parameter[] = [
        { name: 'id', value: id.toString() }
    ];
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Product.GetById, param)
        .pipe(
              map(response => this.mapper.transFromJson(response))
        );
  }

  Save(model: Product) {
    return this.serviceProvider.Post(Endpoint.BaseApi + Endpoint.Product.Save, model);
  }
}
