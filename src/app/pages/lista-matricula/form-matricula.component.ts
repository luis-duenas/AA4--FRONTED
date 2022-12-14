import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'src/app/service/matricula.service';
import { ListaMatriculas } from '../lista-matriculas';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-form-matricula',
  templateUrl: './form-matricula.component.html',
  styleUrls: ['./form-matricula.component.css']
})
export class FormMatriculaComponent implements OnInit {
  estudiante:ListaMatriculas = new ListaMatriculas();
  titulo:string="Registro de Matricula";
  

  constructor(private matriculaService:MatriculaService, private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.estudiante);
    this.matriculaService.create(this.estudiante).subscribe(
      res=>this.router.navigate(['/listamatricula'])
    );
  }


}