import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports:[
    MenubarModule,
    CardModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
