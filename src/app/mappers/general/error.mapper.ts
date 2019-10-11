import { Injectable } from '@angular/core';
import { ServiceError } from 'src/app/models/general/error.model';

@Injectable()
export class ErrorMapper {
    transFromServiceError(json: any): ServiceError {
        let model: ServiceError;
        if (json) {
            model = new ServiceError(
                json.StatusCode,
                json.ErrorMessage
            );
        }
        return model;
    }

    transFromTokenError(json: any): ServiceError {
        let model: ServiceError;
        if (json) {
            model = new ServiceError(
                json.error,
                json.error_description
            );
        }
        return model;
    }

    transFromBadRequest(json: any): ServiceError {
        let model: ServiceError;
        if (json) {
            model = new ServiceError(
                json.status,
                json.message
            );
        }
        return model;
    }
}
