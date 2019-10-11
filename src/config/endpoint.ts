import { environment } from 'src/environments/environment';

export class Endpoint {
    static BaseApi = environment.ServiceBase + 'api/';
    static Token = environment.ServiceBase + 'token';
    static Client = {
        GetByDocument: 'searc_client',
        GetAll: '',
        Save: 'add_client'
    };
    static Payment = {
        GetByClient: 'search_payment',
        Save: 'add_payment'
    };
    static Branch = {
        Get: 'branch',
        GetById: 'branch',
        Save: 'branch'
    };

}
