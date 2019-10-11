export class Client {
    client_id: number;
    client_name: string;
    client_document: string;
    client_birthday: Date;
    state: boolean;

    constructor(client_id: number,
        client_name: string,
        client_document: string,
        client_birthday: Date,
        state: boolean) {
        this.client_id = client_id;
        this.client_name = client_name;
        this.client_document = client_document;
        this.client_birthday = client_birthday;
        this.state = state;
    }
}
