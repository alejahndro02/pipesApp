import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '@ventas/interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], ordenarPor:string = 'Sin Valor' ): Heroe[] {
    switch(ordenarPor){
      case 'Por Nombre':
        return heroes = heroes.sort( ( a, b ) => ( a.nombre < b.nombre ) ? 1 : -1 ) 
      
      case 'Vuela':
        return heroes = heroes.sort( ( a, b ) => ( a.vuela < b.vuela ) ? -1 : 1 ) 
      case 'Por Color':
        return heroes = heroes.sort( ( a, b ) => ( a.color < b.color ) ? -1 : 1 ) 

      default:
        return heroes
    }
  }
}
