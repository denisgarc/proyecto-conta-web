import { Injectable } from '@angular/core';
import { Payment } from 'src/app/models/client/payment.model';

@Injectable()
export class PaymentMapper {
    transFromJson(json: Array<any>): Array<Payment> {
        let model: Array<Payment> = [];
        if (json) {
            model = json.map((c: any) => new Payment(
                c.transaction_id,
                c.client_id,
                c.transaction_date,
                c.transaction_amount
            ));
        }
        return model;
    }
}
