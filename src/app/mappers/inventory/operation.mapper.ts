import { Injectable } from '@angular/core';
import { Operation } from 'src/app/models/Inventory/Operation';

@Injectable()
export class OperationMapper {
    transFromJson(json: Array<any>): Array<Operation> {
        let model: Array<Operation> = [];
        if (json) {
            model = json.map((c: any) => new Operation(
                c.Codigo,
                c.Nombre,
                c.Credito,
                c.Debito,
                c.Estado
            ));
        }
        return model;
    }

    transToService(json: any): Operation {
        let model: Operation;
        if (json) {
            model = new Operation(
                json.Codigo,
                json.Nombre,
                json.Credito,
                json.Debito,
                json.Estado
            );
        }
        return model;
    }
}
