import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CardexMapper, BranchMapper, OperationMapper, ProductMapper } from 'src/app/mappers/inventory.mapper.index';
import { CardexService, BranchService, OperationService, ProductService } from 'src/app/services/inventory.service.index';
import { Cardex, Branch, Operation, Product } from '../../models/inventory.model.index';
import { BasePage } from '../base-page';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css'],
  providers: [
    MessageService,
    CardexMapper,
    CardexService,
    BranchMapper,
    BranchService,
    OperationMapper,
    OperationService,
    ProductMapper,
    ProductService
  ]
})
export class BodegaComponent extends BasePage implements OnInit {
  registerForm: FormGroup;
  source: Array<Cardex> = [];
  clonedItem: { [s: number]: Cardex; } = {};
  branches: Array<Branch> = [];
  operations: Array<Operation> = [];
  products: Array<Product> = [];

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private cardexMapper: CardexMapper,
              private cardexService: CardexService,
              private branchService: BranchService,
              private operationService: OperationService,
              private productService: ProductService) {
    super();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Id: [0, Validators.required],
      Sucursal: [null, Validators.required],
      Operacion: [null, Validators.required],
      Producto: [null, Validators.required],
      FechaOperacion: [new Date(), Validators.required],
      Cantidad: [0, Validators.required],
      Descripcion: ['', Validators.required],
    });

    this.getList();
    this.getBranches();
    this.getOperations();
    this.getProducts();
  }

  getList(): void {
    this.showLoading();
    this.cardexService.Get()
      .subscribe(
        (success: Array<Cardex>) => {
          this.hideLoading();
          this.source = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  getBranches(): void {
    this.showLoading();
    this.branchService.Get()
      .subscribe(
        (success: Array<Branch>) => {
          this.hideLoading();
          this.branches = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  getOperations(): void {
    this.showLoading();
    this.operationService.Get()
      .subscribe(
        (success: Array<Operation>) => {
          this.hideLoading();
          this.operations = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  getProducts(): void {
    this.showLoading();
    this.productService.Get()
      .subscribe(
        (success: Array<Product>) => {
          this.hideLoading();
          this.products = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  save(item: Cardex): void {
    this.showLoading();
    this.cardexService.Save(item)
      .subscribe(
        (success) => {
          this.hideLoading();
          this.dismissModal();
          this.showSuccessToast(this.messageService, 'Operación finalizada con éxito');

          // Recargamos registros
          this.getList();

        }, (error) => {
          this.hideLoading();
          this.msg = error.message;
        }
      );
  }

  saveItem(): void {
    if (this.registerForm.invalid) {
      this.msg = 'Datos incompletos, debe llenar los campos obligatorios';
      return;
    }
    console.log(this.registerForm.value);
    this.save(this.cardexMapper.transToService(this.registerForm.value));
  }

  mostrarModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  onRowEditInit(item: Cardex) {
    this.clonedItem[item.Id] = {...item};
  }

  onRowEditSave(item: Cardex) {
    this.save(item);
  }

  onRowEditCancel(item: Cardex, index: number) {
    this.source[index] = this.clonedItem[item.Id];
    delete this.clonedItem[item.Id];
  }

}
