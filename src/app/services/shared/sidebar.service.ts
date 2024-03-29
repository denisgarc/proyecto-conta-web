import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Sucursal', url: '/branch' }
        // { titulo: 'Progress Bar', url: '/progress' },
        // { titulo: 'Gráficas', url: '/graficas1' },
        // { titulo: 'Promesas', url: '/promesas' },
        // { titulo: 'Observable', url: '/observable' }
      ]
    }
  ];

  constructor() { }
}
