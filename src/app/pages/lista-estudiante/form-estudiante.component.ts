import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { ListaEstudiantes } from '../lista-estudiantes';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {
  estudiante:ListaEstudiantes = new ListaEstudiantes();
  titulo:string="Registro de Estudiante";
  

  constructor(private estudianteService:EstudianteService, private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.estudiante);
    this.estudianteService.create(this.estudiante).subscribe(
      res=>this.router.navigate(['/listaestudiante'])
    );
  }


}
