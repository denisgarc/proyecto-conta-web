import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Inventory/Product';

@Injectable()
export class ProductMapper {
    transFromJson(json: Array<any>): Array<Product> {
        let model: Array<Product> = [];
        model = json;
        // if (json) {
        //     model = json.map((c: any) => new Color(
        //         c.Codigo,
        //         c.Nombre,
        //         c.Estado
        //     ));
        // }
        return model;
    }

    transToService(json: any): Product {
        let model: Product;
        model = json;
        // if (json) {
        //     model = new Color(
        //         json.Codigo,
        //         json.Nombre,
        //         json.Estado
        //     );
        // }
        return model;
    }
}
