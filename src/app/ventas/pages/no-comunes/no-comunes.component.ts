import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {
  //i18nselect
 nombre:string = 'Quetzalli'
 genero: string ='femenino'
 mapGenero:any= {'femenino':'invitarla', 'masculino':'invitarlo'}
 //i18nPlural
 clientes:string[]= ['Quetzalli', 'Fernanda', 'Maria', 'Rodrigo', 'Jose']
 mapClientes={
   '=0':'no hay clientes',
   '=1':  'Tenemos un cliente esperando',
   '=5': 'tenemos 5 clientes esperando',
   'other': 'tenemos # clientes esperando'
 }
  constructor() { }

  ngOnInit(): void {
  }
  cambiarNombre(){
    if(this.genero === 'femenino'){
      this.nombre= 'Alejahndro'
      this.genero= 'masculino'
    }else{
      this.nombre = 'Quetzalli'
      this.genero ='femenino'
    }
  }
  borrarCleinte(){
    this.clientes.pop();
  }
}
