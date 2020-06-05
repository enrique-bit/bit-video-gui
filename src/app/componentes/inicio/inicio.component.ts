import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
const swal = require('sweetalert');

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  proyectos: Array<any>;
  estaCargando = false;

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.estaCargando = true;
    this.proyectosService.traerProyectos()
      .subscribe((proyectosCargados: Array<any>) => {
        this.proyectos = proyectosCargados;
        this.estaCargando = false;
      },
      (error) => {
        console.error('Error cargando los proyectos: ', error);
        swal('Error', error, 'error');
        this.estaCargando = false;
      })
  }

}
