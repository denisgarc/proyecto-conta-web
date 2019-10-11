import { Injectable } from '@angular/core';
import { HttpProviderService } from '../shared/http-provider.service';
import { ColorMapper } from 'src/app/mappers/inventory/color.mapper';
import { Endpoint } from 'src/config/endpoint';
import { Parameter } from 'src/app/models/general/parameter.model';
import { map, defaultIfEmpty, tap } from 'rxjs/operators';
import { Color } from 'src/app/models/Inventory/Color';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private serviceProvider: HttpProviderService,
    private mapper: ColorMapper) { }

  Get(): Observable<Array<Color>> {
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Color.Get)
        .pipe(
          map(response => this.mapper.transFromJson(response))
        );
  }

  GetById(id: number): Observable<Array<Color>> {
    const param: Parameter[] = [
        { name: 'id', value: id.toString() }
    ];
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Color.GetById, param)
        .pipe(
              map(response => this.mapper.transFromJson(response))
        );
  }

  Save(model: Color) {
    return this.serviceProvider.Post(Endpoint.BaseApi + Endpoint.Color.Save, model);
  }
}
