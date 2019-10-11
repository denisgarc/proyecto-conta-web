import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client/client.model';

@Injectable()
export class ClientMapper {

    transFromJson(json: Array<any>): Array<Client> {
        let model: Array<Client> = [];
        if (json) {
            model = json.map((c: any) => new Client(
                c.client_id,
                c.client_name,
                c.client_document,
                c.client_birthday,
                c.state
            ));
        }
        return model;
    }


}
