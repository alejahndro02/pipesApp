import { Component } from '@angular/core';
import { Color, Heroe } from '@ventas/interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
capitalizarPalabra:boolean= false;
heroes: Heroe [] =[
  {
    nombre: 'Superman',
    vuela:  true,
    color:  Color.azul
  },
  {
    nombre: 'Batman',
    vuela:  false,
    color:  Color.negro
  },
  {
    nombre: 'Acuaman',
    vuela:  false,
    color:  Color.verde
  },
  {
    nombre: 'Goku',
    vuela:  true,
    color:  Color.naranja
  }
]

  capitalizar(){
    this.capitalizarPalabra = !this.capitalizarPalabra
  }

}
