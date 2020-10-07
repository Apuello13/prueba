import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  url = 'https://localhost:44387/api/cargos/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(this.url);
  }
}
