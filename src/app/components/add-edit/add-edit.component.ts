import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Empleado } from 'src/app/models/empleado';
import { CargoService } from 'src/app/services/cargo.service';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  accion = 'Añadir';
  personas: FormGroup;
  id: number;
  constructor(private empleadoService: EmpleadoService, private cargoService: CargoService,
              private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
                if(+this.route.snapshot.paramMap.get('id') >0){
                  this.id = + this.route.snapshot.paramMap.get('id');
                }
                this.personas = this.fb.group({
                  nombre: ['', Validators.required],
                  apellido: ['', Validators.required],
                  identificacion: ['', Validators.required],
                  cargo: ['',Validators.required],
                  fechaNacimiento: ['', Validators.required],
                  nombreJefe: ['',Validators.required]
                })
               }

  ngOnInit(): void {
    this.edit();
  }
  edit() {
    if(this.id>0){
      this.accion = 'Editar';
      this.empleadoService.getById(this.id).subscribe(data =>{
        this.personas.patchValue({
          nombre: data.nombre,
          apellido: data.apellido,
          identificacion: data.identificacion,
          cargo: data.cargo,
          fechaNacimiento: data.fecha_nacimiento,
          nombreJefe: data.nombre_jefe 
        })
      });
    }

  }

  save(){
    if(this.accion === 'Añadir'){
      const empleado: Empleado = {
        id: null, 
        nombre: this.personas.get('nombre').value,
        apellido: this.personas.get('apellido').value,
        identificacion: this.personas.get('identificacion').value,
        cargo: this.personas.get('cargo').value,
        fecha_nacimiento: this.personas.get('fechaNacimiento').value,
        nombre_jefe: this.personas.get('nombreJefe').value
      }
      this.empleadoService.add(empleado).subscribe(data =>{
        this.router.navigate(['/']);
      });
      console.log(empleado);
    }else{
      const empleado: Empleado = {
        id: this.id, 
        nombre: this.personas.get('nombre').value,
        apellido: this.personas.get('apellido').value,
        identificacion: this.personas.get('identificacion').value,
        cargo: this.personas.get('cargo').value,
        fecha_nacimiento: this.personas.get('fechaNacimiento').value,
        nombre_jefe: this.personas.get('nombreJefe').value
      }
      this.empleadoService.edit(this.id, empleado).subscribe(data => {
        this.router.navigate(['/']);
      });      
    }
  }
}
