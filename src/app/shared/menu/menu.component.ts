import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[]= [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Texto y Fechas',
            icon: 'pi pi-align-left',
            routerLink:'/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink:'numeros'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-slack',
            routerLink:'no-comunes'
          },
          {
            label: 'Ordenar',
            icon: 'pi pi-star',
            routerLink:'ordenar'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
      }
  ];
  }

}
