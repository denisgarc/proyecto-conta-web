import { Injectable } from '@angular/core';
import { Session } from 'src/app/models/general/session.model';

@Injectable()
export class SessionMapper {
    transFromJson(json: any): Session {
        let model: Session;
        if (json) {
            model = new Session(
                json.access_token,
                json.token_type,
                json.expires_in
            );
        }
        return model;
    }
}
