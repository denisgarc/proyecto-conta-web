import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterAuthGuard } from '../providers/guards/router.guard';
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
            { path: 'branch', component: BranchComponent, data: { titulo: 'Sucursales'}, canActivate: [RouterAuthGuard]},
            { path: 'brand', component: BrandComponent, data: { titulo: 'Marcas'}, canActivate: [RouterAuthGuard]},
            { path: 'color', component: ColorComponent, data: { titulo: 'Colores'}, canActivate: [RouterAuthGuard]},
            { path: 'product', component: ProductComponent, data: { titulo: 'Productos'}, canActivate: [RouterAuthGuard]},
            { path: 'cardex', component: BodegaComponent, data: { titulo: 'Bodega'}, canActivate: [RouterAuthGuard]},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
