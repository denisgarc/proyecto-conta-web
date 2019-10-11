import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client/client.model';
import { ClientService } from 'src/app/services/client/client.service';
import { ClientMapper } from 'src/app/mappers/client/client.mapper';
import { PaymentMapper } from 'src/app/mappers/client/payment.mapper';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
  providers: [
    ClientService,
    ClientMapper,
    PaymentMapper
  ]
})
export class ClientPageComponent implements OnInit {
  public model: Client = new Client(0, '', '', null, true);
  loading: boolean = false;
  msg: string;
  success: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  saveClient() {
    this.loading = true;
    if (this.isValidModel(this.model)) {
      this.clientService.SaveClient(this.model)
        .subscribe(
          (success) => {
            this.loading = false;
            this.success = 'Cliente grabado exitosamente';
            this.model = new Client(0, '', '', null, true);
          }, (error) => {
            this.loading = false;
            this.msg = error.message;
          }
        );
    } else {
      this.loading = false;
    }
  }

  isValidModel(object: Client) {
    if (this.model.client_name === '') {
      this.msg = 'Debe ingresar el nombre del cliente';
      return false;
    } else if (this.model.client_document === '') {
      this.msg = 'Debe ingresar el número de documento del cliente';
      return false;
    } else if (this.model.client_birthday === null || this.model.client_birthday === undefined) {
      this.msg = 'Debe ingresar la fecha de nacimiento del cliente';
      return false;
    }

    return true;
  }

  dismiss() {
    this.msg = null;
    this.success = null;
  }

}
