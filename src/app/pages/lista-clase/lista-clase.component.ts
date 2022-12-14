import { Component, OnInit } from '@angular/core';
import { ListaClasess } from '../lista-clasess';
import { ClaseService } from 'src/app/service/clase.service';

@Component({
  selector: 'app-lista-clase',
  templateUrl: './lista-clase.component.html',
  styleUrls: ['./lista-clase.component.css']
})
export class ListaClaseComponent implements OnInit {
  clases: ListaClasess[];
  constructor(private claseService:ClaseService) { }

  ngOnInit(): void {
    this.claseService.getAll().subscribe(
      e =>this.clases=e
    );
  }
  delete(clase:ListaClasess):void{
    console.log("hello xd")
    this.claseService.delete(clase.aIdClase).subscribe(
      res=>this.claseService.getAll().subscribe(
        response=>this.clases=response
      )
    )
  }
}