import { Injectable } from '@angular/core';
import { HttpProviderService } from '../shared/http-provider.service';
import { ClientMapper } from 'src/app/mappers/client/client.mapper';
import { PaymentMapper } from 'src/app/mappers/client/payment.mapper';
import { Endpoint } from 'src/config/endpoint';
import { Parameter } from 'src/app/models/general/parameter.model';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/models/client/client.model';
import { Payment } from 'src/app/models/client/payment.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private serviceProvider: HttpProviderService,
    private clientMap: ClientMapper,
    private paymentMap: PaymentMapper) { }

  GetClientByDocument(DocumentNumber: string) {
    const Url: string = Endpoint.BaseApi + Endpoint.Client.GetByDocument;
    const params: Parameter[] = [
      { name: 'search_document', value: DocumentNumber }
    ];

    return this.serviceProvider.Get(Url, params);
  }

  GetClientList() {
    const Url: string = Endpoint.BaseApi + Endpoint.Client.GetAll;
    return this.serviceProvider.Get(Url);
  }

  SaveClient(model: Client) {
    const Url: string = Endpoint.BaseApi + Endpoint.Client.Save;
    return this.serviceProvider.Post(Url, model);
  }

  GetPaymentByClient(ClientId: number) {
    const Url: string = Endpoint.BaseApi + Endpoint.Payment.GetByClient;
    const params: Parameter[] = [
      { name: 'client_id', value: ClientId.toString() }
    ];

    return this.serviceProvider.Get(Url, params);
  }

  SavePayment(model: Payment) {
    const Url: string = Endpoint.BaseApi + Endpoint.Payment.Save;
    return this.serviceProvider.Post(Url, model);
  }
}
