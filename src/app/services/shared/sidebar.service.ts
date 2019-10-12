import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Bodega',
      icono: 'mdi mdi-cart-outline',
      submenu: [
        { titulo: 'Bodega', url: '/cardex' },
        { titulo: 'Reporte de Exitencias', url: '/existence' }
      ]
    },
    {
      titulo: 'Maestros',
      icono: 'mdi mdi-memory',
      submenu: [
        { titulo: 'Sucursales', url: '/branch' },
        { titulo: 'Marcas', url: '/brand' },
        { titulo: 'Colores', url: '/color' },
        { titulo: 'Productos', url: '/product' },
      ]
    }
  ];

  constructor() { }
}
