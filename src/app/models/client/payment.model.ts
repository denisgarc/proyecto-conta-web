export class Payment {
    transaction_id: number;
    client_id: number;
    transaction_date: Date;
    transaction_amount: number;

    constructor(transaction_id: number,
        client_id: number,
        transaction_date: Date,
        transaction_amount: number) {
        this.transaction_id = transaction_id;
        this.client_id = client_id;
        this.transaction_date = transaction_date;
        this.transaction_amount = transaction_amount;
    }
}
