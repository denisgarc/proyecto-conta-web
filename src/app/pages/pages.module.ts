import { NgModule } from '@angular/core';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
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

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ClientPageComponent } from './cliente/client-page/client-page.component';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch/branch.component';

// Providers
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrandComponent } from './brand/brand.component';
import { ColorComponent } from './color/color.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ClientPageComponent,
        BranchComponent,
        BrandComponent,
        ColorComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
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
    ],
    providers: [
        BsModalService
    ]
})
export class PagesModule { }
