import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaMatriculas } from '../pages/lista-matriculas';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private url:string="http://localhost:8080/ApiRest/matricula";
  constructor( private http:HttpClient) { }


  getAll():Observable<ListaMatriculas[]>{
    return this.http.get<ListaMatriculas[]>(this.url,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  create(matricula:ListaMatriculas):Observable<ListaMatriculas>{
    return this.http.post<ListaMatriculas>(this.url, matricula,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  get(id:number):Observable<ListaMatriculas>{
    return this.http.get<ListaMatriculas>(this.url+'/'+id,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  update(matricula:ListaMatriculas):Observable<ListaMatriculas>{
    return this.http.put<ListaMatriculas>(this.url, matricula,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  delete(id:number):Observable<ListaMatriculas>{
    return this.http.delete<ListaMatriculas>(this.url+'/'+id,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}
