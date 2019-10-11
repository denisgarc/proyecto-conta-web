import { Injectable } from '@angular/core';
import { Brand } from 'src/app/models/Inventory/Brand';

@Injectable()
export class BrandMapper {
    transFromJson(json: Array<any>): Array<Brand> {
        let model: Array<Brand> = [];
        if (json) {
            model = json.map((c: any) => new Brand(
                c.Codigo,
                c.Nombre,
                c.Estado
            ));
        }
        return model;
    }

    transToService(json: any): Brand {
        let model: Brand;
        if (json) {
            model = new Brand(
                json.Codigo,
                json.Nombre,
                json.Estado
            );
        }
        return model;
    }
}
