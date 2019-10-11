import { Component, OnInit, TemplateRef } from '@angular/core';
import { Brand } from 'src/app/models/Inventory/Brand';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BranchMapper } from 'src/app/mappers/inventory/branch.mapper';
import { BranchService } from 'src/app/services/inventory/branch.service';
import { BasePage } from '../base-page';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent extends BasePage implements OnInit {

  registerForm: FormGroup;
  source: Array<Branch> = [];
  clonedItem: { [s: number]: Branch; } = {};

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private branchMapper: BranchMapper,
              private branchService: BranchService) {
    super();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Codigo: [0, Validators.required],
      Nombre: ['', Validators.required],
      NombreAbreviado: ['', Validators.required],
      Estado: [true, Validators.required]
    });

    this.getList();
  }

  getList(): void {
    this.showLoading();
    this.branchService.Get()
      .subscribe(
        (success: Array<Branch>) => {
          this.hideLoading();
          this.source = success;
        }, (error: any) => {
          this.hideLoading();
          this.showErrorToast(this.messageService, error.message);
        }
      );
  }

  save(branch: Branch): void {
    this.showLoading();
    this.branchService.Save(branch)
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

  saveBranch(): void {
    if (this.registerForm.invalid) {
      this.msg = 'Datos incompletos, debe llenar los campos obligatorios';
      return;
    }
    this.save(this.branchMapper.transToService(this.registerForm.value));
  }

  mostrarModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  onRowEditInit(branch: Branch) {
    this.clonedItem[branch.Codigo] = {...branch};
  }

  onRowEditSave(branch: Branch) {
    this.save(branch);
  }

  onRowEditCancel(branch: Branch, index: number) {
    this.source[index] = this.clonedItem[branch.Codigo];
    delete this.clonedItem[branch.Codigo];
  }

}
