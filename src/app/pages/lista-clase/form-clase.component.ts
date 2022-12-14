import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ClaseService } from 'src/app/service/clase.service';
import { ListaClasess } from '../lista-clasess';
@Component({
  selector: 'app-form-clase',
  templateUrl: './form-clase.component.html',
  styleUrls: ['./form-clase.component.css']
})
export class FormClaseComponent implements OnInit {
  clase: ListaClasess = new ListaClasess();
  titulo:string="Registro de Clase";
  

  constructor(private claseService:ClaseService, private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.clase);
    this.claseService.create(this.clase).subscribe(
      res=>this.router.navigate(['/listaclase'])
    );
  }


}
