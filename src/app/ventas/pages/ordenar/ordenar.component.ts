import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {
capitalizarPalabra:boolean= false
  constructor() { }

  ngOnInit(): void {
  }
  capitalizar(){
    this.capitalizarPalabra = !this.capitalizarPalabra
  }
}
