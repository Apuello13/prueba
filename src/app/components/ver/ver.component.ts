import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
  id:number;
  empleado: Empleado;
  constructor(private empleadoService: EmpleadoService, private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getEmpleado();
  }

  getEmpleado(){
    this.empleadoService.getById(this.id).subscribe(data =>{
      this.empleado = data;
    });
  }

}
