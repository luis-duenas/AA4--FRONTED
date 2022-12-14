import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaEstudiantes } from '../pages/lista-estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url:string="http://localhost:8080/ApiRest/estudiante";
  constructor( private http:HttpClient) { }


  getAll():Observable<ListaEstudiantes[]>{
    return this.http.get<ListaEstudiantes[]>(this.url,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  create(estudiante:ListaEstudiantes):Observable<ListaEstudiantes>{
    return this.http.post<ListaEstudiantes>(this.url, estudiante,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  get(id:number):Observable<ListaEstudiantes>{
    return this.http.get<ListaEstudiantes>(this.url+'/'+id,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  update(estudiante:ListaEstudiantes):Observable<ListaEstudiantes>{
    return this.http.put<ListaEstudiantes>(this.url, estudiante,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  delete(id:number):Observable<ListaEstudiantes>{
    return this.http.delete<ListaEstudiantes>(this.url+'/'+id,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}
