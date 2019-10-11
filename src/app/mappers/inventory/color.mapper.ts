import { Injectable } from '@angular/core';
import { Color } from 'src/app/models/Inventory/Color';

@Injectable()
export class ColorMapper {
    transFromJson(json: Array<any>): Array<Color> {
        let model: Array<Color> = [];
        if (json) {
            model = json.map((c: any) => new Color(
                c.Codigo,
                c.Nombre,
                c.Estado
            ));
        }
        return model;
    }

    transToService(json: any): Color {
        let model: Color;
        if (json) {
            model = new Color(
                json.Codigo,
                json.Nombre,
                json.Estado
            );
        }
        return model;
    }
}
