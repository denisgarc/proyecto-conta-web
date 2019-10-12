import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BasePage } from '../base-page';
import { BrandMapper, ColorMapper, ProductMapper } from 'src/app/mappers/inventory.mapper.index';
import { BrandService, ColorService, ProductService } from 'src/app/services/inventory.service.index';
import { Brand, Color, Product } from '../../models/inventory.model.index';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [
    MessageService,
    ProductMapper,
    ProductService,
    BrandMapper,
    BrandService,
    ColorMapper,
    ColorService
  ]
})
export class ProductComponent extends BasePage implements OnInit {
  registerForm: FormGroup;
  source: Array<Product> = [];
  clonedItem: { [s: number]: Product; } = {};
  brands: Array<Brand> = [];
  colors: Array<Color> = [];

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private productMapper: ProductMapper,
              private productService: ProductService,
              private brandService: BrandService,
              private colorService: ColorService) {
    super();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Codigo: [0, Validators.required],
      Marca: [null, Validators.required],
      Color: [null, Validators.required],
      Descripcion: ['', Validators.required],
      Tamano: [0, Validators.required],
      Estado: [true, Validators.required]
    });

    this.getList();
    this.getBrands();
    this.getColors();
  }

  getList(): void {
    this.showLoading();
    this.productService.Get()
      .subscribe(
        (success: Array<Product>) => {
          this.hideLoading();
          this.source = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  getBrands(): void {
    this.showLoading();
    this.brandService.Get()
      .subscribe(
        (success: Array<Brand>) => {
          this.hideLoading();
          this.brands = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  getColors(): void {
    this.showLoading();
    this.colorService.Get()
      .subscribe(
        (success: Array<Color>) => {
          this.hideLoading();
          this.colors = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  save(item: Product): void {
    this.showLoading();
    this.productService.Save(item)
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
    this.save(this.productMapper.transToService(this.registerForm.value));
  }

  mostrarModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  onRowEditInit(item: Product) {
    this.clonedItem[item.Codigo] = {...item};
  }

  onRowEditSave(item: Product) {
    this.save(item);
  }

  onRowEditCancel(item: Product, index: number) {
    this.source[index] = this.clonedItem[item.Codigo];
    delete this.clonedItem[item.Codigo];
  }

}
