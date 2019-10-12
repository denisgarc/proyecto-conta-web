import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RouterAuthGuard } from '../providers/guards/router.guard';
import { ClientPageComponent } from './cliente/client-page/client-page.component';
import { BranchComponent } from './branch/branch.component';
import { BrandComponent } from './brand/brand.component';
import { ColorComponent } from './color/color.component';
import { ProductComponent } from './product/product.component';
import { BodegaComponent } from './bodega/bodega.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }, canActivate: [RouterAuthGuard] },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' },
                canActivate: [RouterAuthGuard] },
            { path: 'branch', component: BranchComponent, data: { titulo: 'Sucursal'}, canActivate: [RouterAuthGuard]},
            { path: 'brand', component: BrandComponent, data: { titulo: 'Marca'}, canActivate: [RouterAuthGuard]},
            { path: 'color', component: ColorComponent, data: { titulo: 'Marca'}, canActivate: [RouterAuthGuard]},
            { path: 'product', component: ProductComponent, data: { titulo: 'Productos'}, canActivate: [RouterAuthGuard]},
            { path: 'cardex', component: BodegaComponent, data: { titulo: 'Bodega'}, canActivate: [RouterAuthGuard]},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

            // { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }, canActivate: [RouterAuthGuard] },
            // { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' }, canActivate: [RouterAuthGuard] },
            // { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }, canActivate: [RouterAuthGuard] },
            // { path: 'observable', component: RxjsComponent, data: { titulo: 'Observables' }, canActivate: [RouterAuthGuard] },
            // { path: 'client', component: ClientPageComponent, data: { titulo: 'Clientes'}, canActivate: [RouterAuthGuard]},
