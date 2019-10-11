import { Injectable } from '@angular/core';
import { Cardex } from 'src/app/models/Inventory/Cardex';

@Injectable()
export class CardexMapper {
    transFromJson(json: Array<any>): Array<Cardex> {
        let model: Array<Cardex> = [];
        // if (json) {
        //     model = json.map((c: any) => new Color(
        //         c.Codigo,
        //         c.Nombre,
        //         c.Estado
        //     ));
        // }
        model = json;
        return model;
    }

    transToService(json: any): Cardex {
        let model: Cardex;
        // if (json) {
        //     model = new Color(
        //         json.Codigo,
        //         json.Nombre,
        //         json.Estado
        //     );
        // }
        model = json;
        return model;
    }
}
