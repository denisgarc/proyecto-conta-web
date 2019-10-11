import { MessageService } from 'primeng/api';
import { BsModalRef } from 'ngx-bootstrap/modal';

export abstract class BaseComponent {
    public loading: boolean = false;
    public msg: string;
    public success: string;
    public modalRef: BsModalRef;

    public showLoading() {
        this.loading = true;
    }

    public hideLoading() {
        this.loading = false;
    }

    public showWarningToast(messageService: MessageService, message: string): void {
        messageService.add({severity: 'warning', summary: '¡Advertencia!', detail: message});
    }

    public showErrorToast(messageService: MessageService, message: string): void {
        messageService.add({severity: 'error', summary: '¡Error!', detail: message});
    }

    public showSuccessToast(messageService: MessageService, message: string): void {
        messageService.add({severity: 'success', summary: '¡Correcto!', detail: message});
    }

    public showInfoToast(messageService: MessageService, message: string): void {
        messageService.add({severity: 'info', summary: '¡Información!', detail: message});
    }

    public showToast(messageService: MessageService, options: any): void {
        messageService.add(options);
    }

    public dismiss(): void {
        this.success = null;
        this.msg = null;
    }

    public dismissModal(): void {
        if (this.modalRef != null) {
          this.modalRef.hide();
        }
    }
}
