import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { ListaEstudiantes } from '../lista-estudiantes';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent implements OnInit {
  estudiantes: ListaEstudiantes[];
  constructor(private estudianteService:EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getAll().subscribe(
      e =>this.estudiantes=e
    );
  }
  delete(estudiante:ListaEstudiantes):void{
    console.log("hello xd")
    this.estudianteService.delete(estudiante.aIdEstudiante).subscribe(
      res=>this.estudianteService.getAll().subscribe(
        response=>this.estudiantes=response
      )
    )
  }
}

