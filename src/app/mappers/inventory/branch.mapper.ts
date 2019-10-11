import { Injectable } from '@angular/core';
import { Branch } from 'src/app/models/Inventory/Branch';

@Injectable()
export class BranchMapper {
    transFromJson(json: Array<any>): Array<Branch> {
        let model: Array<Branch> = [];
        if (json) {
            model = json.map((c: any) => new Branch(
                c.Codigo,
                c.Nombre,
                c.NombreAbreviado,
                c.Estado
            ));
        }
        return model;
    }

    transToService(json: any): Branch {
        let model: Branch;
        if (json) {
            model = new Branch(
                json.Codigo,
                json.Nombre,
                json.NombreAbreviado,
                json.Estado
            );
        }
        return model;
    }
}
