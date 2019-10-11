import { Injectable } from '@angular/core';
import { HttpProviderService } from '../shared/http-provider.service';
import { BranchMapper } from 'src/app/mappers/inventory/branch.mapper';
import { Endpoint } from 'src/config/endpoint';
import { Parameter } from 'src/app/models/general/parameter.model';
import { map, defaultIfEmpty, tap } from 'rxjs/operators';
import { Branch } from 'src/app/models/Inventory/Branch';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private serviceProvider: HttpProviderService,
    private branchMap: BranchMapper) { }

  Get(): Observable<Array<Branch>> {
    const Url: string = Endpoint.BaseApi + Endpoint.Branch.Get;
    return this.serviceProvider.Get(Url).pipe(
      map(response => this.branchMap.transFromJson(response))
    );
  }

  GetById(id: number): Observable<Array<Branch>> {
    const Url: string = Endpoint.BaseApi + Endpoint.Branch.GetById;
    const param: Parameter[] = [{name: 'id', value: id.toString()}];
    return this.serviceProvider.Get(Url, param).pipe(
      map(response => this.branchMap.transFromJson(response))
    );
  }

  Save(model: Branch) {
    const Url: string = Endpoint.BaseApi + Endpoint.Branch.Save;
    return this.serviceProvider.Post(Url, model);
  }
}
