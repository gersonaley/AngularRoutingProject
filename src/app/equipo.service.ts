import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo: any[] = [
    {
      nombre: 'Gerson Alejandro Aley',
      especialidad: 'HTML',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.'
    },
    {
      nombre: 'María Rivas',
      especialidad: 'CSS',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.'
    }
  ];

  constructor() {
    console.log('Funcionando servicio...');
  }

  obtenerEquipo() {
    return this.equipo;
  }

  obtenerUno(i) {
    return this.equipo[i];
  }
}
