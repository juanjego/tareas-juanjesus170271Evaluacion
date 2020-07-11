import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tareasreg',
  templateUrl: './tareasreg.component.html',
  styleUrls: ['./tareasreg.component.css']
})
export class TareasregComponent  {
  
  tareasreg: FormGroup;

  public tareas: Array<string> = [];
  item: string;
  public tarea: string="";
  public registro: string="";
  public mensaje: string ="";

  guardarArreglo(){
    this.tareas.push(this.item);
    this.item="";
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
  
  mostrarArreglo(){
    this.tareas = JSON.parse(localStorage.getItem('tareas'));
  }
  
  constructor(
    public fb: FormBuilder
  ) {
    this.tareasreg = this.fb.group({
      
      tarea: ['', [Validators.required,Validators.minLength(5)]]
    });
  }

  
  registrar(values){
    console.log(values);
}

empty() {
  //empty your array
  this.tareas.length = 0;
}

/*
onSubmit(){
  this.registro =  this.tarea ;
  this.tareas.push(this.registro);
  console.log(this.tareas);
}*/
onDelete(){
  this.empty();
  console.log(this.tareas);
}
}
  

