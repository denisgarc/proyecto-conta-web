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
    static Brand = {
        Get: 'brand',
        GetById: 'brand',
        Save: 'brand'
    };
    static Cardex = {
        Get: 'cardex',
        GetById: 'cardex',
        GetFiltered: 'cardex/filter',
        Save: 'cardex'
    };
    static Color = {
        Get: 'color',
        GetById: 'color',
        Save: 'color'
    };
    static Operation = {
        Get: 'operation',
        GetById: 'operation',
        Save: 'operation'
    };
    static Product = {
        Get: 'product',
        GetById: 'product',
        Save: 'product'
    };
}
