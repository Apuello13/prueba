import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = 'https://localhost:44387/api/personas/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.url);
  }

  public getById(id:number): Observable<Empleado>{
    return this.http.get<Empleado>(this.url + id);
  }

  public deleteById(id:number): Observable<Empleado>{
    return this.http.delete<Empleado>(this.url + id);
  }

  public add(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.url, empleado, this.httpOptions);
  }

  public edit(id:number, empleado: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(this.url + id, empleado, this.httpOptions);
  }
}
