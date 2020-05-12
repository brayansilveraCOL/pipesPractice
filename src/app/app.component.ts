import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Capitan America";
  nombre2:string = "BrAyanX sixLVERA quinTero";
  Arreglo:string[] = ['Capitan america', 'Spiderman', "Hulk", 'ironMan'];
  PI:number= Math.PI;
  porcentaje:number = 0.789789;
  salario:number = 500000.50;
  hero:any ={
    nombre:"logan",
    clave: "dsdsadsda",
    edad:40,
    dir:{
      caller: "primera",
      casa:"segunda",
    }
  };
  promesas = new Promise<string>((resolve)=>{
    setTimeout(()=>{
        resolve('Llero dato')
    },3500)
  })
  fecha: Date = new Date();
  videoUrl: string = 'https://www.youtube.com/embed/VY448UWAQ_0';
  Activar: boolean = true;


}
