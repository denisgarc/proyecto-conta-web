import { Injectable } from '@angular/core';
import { HttpProviderService } from '../shared/http-provider.service';
import { BranchMapper } from 'src/app/mappers/inventory/branch.mapper';
import { Endpoint } from 'src/config/endpoint';
import { Parameter } from 'src/app/models/general/parameter.model';
import { map, defaultIfEmpty, tap } from 'rxjs/operators';
import { Branch } from 'src/app/models/Inventory/Branch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private serviceProvider: HttpProviderService,
    private mapper: BranchMapper) { }

  Get(): Observable<Array<Branch>> {
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Branch.Get)
      .pipe(
        map(response => this.mapper.transFromJson(response))
      );
  }

  GetById(id: number): Observable<Array<Branch>> {
    const param: Parameter[] = [
      { name: 'id', value: id.toString() }
    ];
    return this.serviceProvider.Get(Endpoint.BaseApi + Endpoint.Branch.GetById, param)
      .pipe(
        map(response => this.mapper.transFromJson(response))
      );
  }

  Save(model: Branch) {
    return this.serviceProvider.Post(Endpoint.BaseApi + Endpoint.Branch.Save, model);
  }
}
