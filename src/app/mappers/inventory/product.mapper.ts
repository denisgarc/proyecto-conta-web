import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Inventory/Product';

@Injectable()
export class ProductMapper {
    transFromJson(json: Array<any>): Array<Product> {
        let model: Array<Product> = [];
        if (json) {
            model = json.map((c: any) => new Product(
                c.Codigo,
                c.Marca,
                c.Color,
                c.Descripcion,
                c.Tamano,
                c.Estado
            ));
        }
        return model;
    }

    transToService(json: any): Product {
        let model: Product;
        if (json) {
            model = new Product(
                json.Codigo,
                json.Marca,
                json.Color,
                json.Descripcion,
                json.Tamano,
                json.Estado
            );
        }
        return model;
    }
}
