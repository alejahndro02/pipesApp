import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '@ventas/interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], ordenarPor:string = 'Sin Valor' ): Heroe[] {
    if( ordenarPor === 'Sin valor' ){
      return heroes
    }else{
      heroes = heroes.sort( ( a, b ) => ( a.nombre < b.nombre ) ? 1 : -1 ) 
    }
    return heroes
  }

}
