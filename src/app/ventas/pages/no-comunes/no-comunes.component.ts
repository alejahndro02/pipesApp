import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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

  //keyValuePipe
  personas={
    nombre:'Quetzalli',
    apellido: 'Hernández',
    edad:2
  }
  //Jsonpipe
  heroes =[
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Batman',
      vuela: false
    },
    {
      nombre:'acuaman',
      vuela: false
    }
  ]
  //AsyncPIPE
  //asignasion mediante obsevable
  miObservable = interval(1000)

  //asignacion Mediante promesa
  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos Data de promesa')
    },5000)
  });
}
