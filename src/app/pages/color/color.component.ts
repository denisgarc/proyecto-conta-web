import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ColorMapper } from 'src/app/mappers/inventory.mapper.index';
import { ColorService } from 'src/app/services/inventory.service.index';
import { Color } from '../../models/inventory.model.index';
import { BasePage } from '../base-page';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [
    MessageService,
    ColorMapper,
    ColorService
  ]
})
export class ColorComponent extends BasePage implements OnInit {
  registerForm: FormGroup;
  source: Array<Color> = [];
  clonedItem: { [s: number]: Color; } = {};

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private colorMapper: ColorMapper,
              private colorService: ColorService) {
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
    this.colorService.Get()
      .subscribe(
        (success: Array<Color>) => {
          this.hideLoading();
          this.source = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  save(item: Color): void {
    this.showLoading();
    this.colorService.Save(item)
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
    this.save(this.colorMapper.transToService(this.registerForm.value));
  }

  mostrarModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  onRowEditInit(item: Color) {
    this.clonedItem[item.Codigo] = {...item};
  }

  onRowEditSave(item: Color) {
    this.save(item);
  }

  onRowEditCancel(item: Color, index: number) {
    this.source[index] = this.clonedItem[item.Codigo];
    delete this.clonedItem[item.Codigo];
  }

}
