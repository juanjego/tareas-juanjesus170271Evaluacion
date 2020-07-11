import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notasreg',
  templateUrl: './notasreg.component.html',
  styleUrls: ['./notasreg.component.css']
})
export class NotasregComponent  {
  notasreg: FormGroup;

  public notas: Array<string> = [];
  public titulo: string="";
  public descripcion: string="";
  public registro: string="";
  public mensaje: string ="";
  public notas2: Array<string> = [];
  public fechaActual = new Date();

  
    constructor(
    public fb: FormBuilder
  ) {
    this.notasreg = this.fb.group({
      
      titulo: ['', [Validators.required,Validators.minLength(5)]],
      descripcion: ['', [Validators.required,Validators.minLength(5)]]
    });
  }

  
  registrar(values){
    console.log(values);
  }



onSubmit(){
  this.registro = "Titulo: "+ this.titulo+", Descripcion: "+this.descripcion;
  this.notas2 =this.registro.split(", ");
  this.notas.push(this.registro);
  localStorage.setItem('notas', JSON.stringify(this.notas));
}
mostrarArreglo(){
  this.notas = JSON.parse(localStorage.getItem('notas'));
}

 
}

