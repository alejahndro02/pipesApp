import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '@primeNg/prime-ng.module';
import { MayusculasPipe } from '@pipes/mayusculas.pipe';
import { PowerFly } from './pipes/vuela.pipe';



@NgModule({
  declarations: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    MayusculasPipe,
    PowerFly
  ],
  exports:[
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  providers:[]
})
export class VentasModule { }
