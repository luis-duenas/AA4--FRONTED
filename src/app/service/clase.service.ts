import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaClasess } from '../pages/lista-clasess';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private url:string="http://localhost:8080/ApiRest/clase";
  constructor( private http:HttpClient) { }


  getAll():Observable<ListaClasess[]>{
    return this.http.get<ListaClasess[]>(this.url,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  create(clase:ListaClasess):Observable<ListaClasess>{
    return this.http.post<ListaClasess>(this.url, clase ,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  get(id:number):Observable<ListaClasess>{
    return this.http.get<ListaClasess>(this.url+'/'+id ,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  update(clase:ListaClasess):Observable<ListaClasess>{
    return this.http.put<ListaClasess>(this.url, clase,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  delete(id:number):Observable<ListaClasess>{
    return this.http.delete<ListaClasess>(this.url+'/'+id,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}

