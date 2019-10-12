import { NgModule } from '@angular/core';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TableModule } from 'primeng/table';
import { ModalModule } from 'ngx-bootstrap';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { DropdownModule } from 'primeng/dropdown';


// Rutas
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch/branch.component';

// Providers
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrandComponent } from './brand/brand.component';
import { ColorComponent } from './color/color.component';
import { ProductComponent } from './product/product.component';
import { BodegaComponent } from './bodega/bodega.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent,
        BranchComponent,
        BrandComponent,
        ColorComponent,
        ProductComponent,
        BodegaComponent
    ],
    exports: [
        DashboardComponent,
        BranchComponent,
        BrandComponent,
        ColorComponent,
        ProductComponent,
        BodegaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        CommonModule,
        TableModule,
        ModalModule.forRoot(),
        InputSwitchModule,
        ToastModule,
        BrowserAnimationsModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.circleSwish,
            backdropBackgroundColour: 'rgba(0,0,0,0.4)',
              backdropBorderRadius: '4px',
              primaryColour: '#ffffff',
              secondaryColour: '#ffffff',
              tertiaryColour: '#ffffff'
          }),
        DropdownModule
    ],
    providers: [
        BsModalService
    ]
})
export class PagesModule { }
