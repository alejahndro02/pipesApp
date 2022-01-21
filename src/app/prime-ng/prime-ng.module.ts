import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports:[
    CardModule,
    FieldsetModule,
    MenubarModule,
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
