import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  empleados: Empleado[];
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getAll().subscribe(data => {
      this.empleados = data;
    });
  }

  delete(id:number){
    this.empleadoService.deleteById(id).subscribe(data =>{
      this.getEmpleados();
    });
  }
}
