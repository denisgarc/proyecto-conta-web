import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BrandMapper } from 'src/app/mappers/inventory.mapper.index';
import { BrandService } from 'src/app/services/inventory.service.index';
import { Brand } from '../../models/inventory.model.index';
import { BasePage } from '../base-page';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [
    MessageService,
    BrandMapper,
    BrandService
  ]
})
export class BrandComponent extends BasePage implements OnInit {

  registerForm: FormGroup;
  source: Array<Brand> = [];
  clonedItem: { [s: number]: Brand; } = {};

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private brandMapper: BrandMapper,
              private brandService: BrandService) {
    super();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Codigo: [0, Validators.required],
      Nombre: ['', Validators.required],
      Estado: [true, Validators.required]
    });

    this.getList();
  }

  getList(): void {
    this.showLoading();
    this.brandService.Get()
      .subscribe(
        (success: Array<Brand>) => {
          this.hideLoading();
          this.source = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  save(item: Brand): void {
    this.showLoading();
    this.brandService.Save(item)
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
    this.save(this.brandMapper.transToService(this.registerForm.value));
  }

  mostrarModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  onRowEditInit(item: Brand) {
    this.clonedItem[item.Codigo] = {...item};
  }

  onRowEditSave(item: Brand) {
    this.save(item);
  }

  onRowEditCancel(item: Brand, index: number) {
    this.source[index] = this.clonedItem[item.Codigo];
    delete this.clonedItem[item.Codigo];
  }

}
