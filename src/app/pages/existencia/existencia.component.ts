import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CardexMapper, BranchMapper, ProductMapper } from 'src/app/mappers/inventory.mapper.index';
import { CardexService, BranchService, ProductService } from 'src/app/services/inventory.service.index';
import { Cardex, Branch, Product } from '../../models/inventory.model.index';
import { BasePage } from '../base-page';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.css'],
  providers: [
    MessageService,
    CardexMapper,
    CardexService,
    BranchMapper,
    BranchService,
    ProductMapper,
    ProductService
  ]
})
export class ExistenciaComponent extends BasePage implements OnInit {
  rowGroupMetadata: any;
  registerForm: FormGroup;
  source: Array<Cardex> = [];
  branches: Array<Branch> = [];
  products: Array<Product> = [];
  filter: any = {
    startDate: new Date(),
    finishDate: new Date(),
    branch: null,
    product: null
  };

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private cardexMapper: CardexMapper,
              private cardexService: CardexService,
              private branchService: BranchService,
              private productService: ProductService) {
    super();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      startDate: [null, Validators.required],
      finishDate: [null, Validators.required],
      branch: [null, ],
      product: [null, ]
    });

    this.getBranches();
    this.getProducts();
  }

  getList(model: any): void {
    this.showLoading();
    this.cardexService.GetFiltered(model.startDate, model.finishDate, model.branch, model.product)
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

  showReport(): void {
    console.log(this.registerForm.value, 'model');
    if (this.registerForm.invalid) {
      this.showWarningToast(this.messageService, 'Debe ingresar un rango de fechas para visualizar la información');
      return;
    }

    const formModel = this.registerForm.value;

    this.filter.startDate = formModel.startDate;
    this.filter.finishDate = formModel.finishDate;

    if (formModel.branch != null) {
      this.filter.branch = formModel.branch.Codigo;
    }

    if (formModel.product != null) {
      this.filter.branch = formModel.product.Codigo;
    }

    this.getList(this.filter);
  }

  cancelReport(): void {
    this.registerForm.reset();
    this.source = [];
    this.filter = {};
  }
}
