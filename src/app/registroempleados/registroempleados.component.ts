import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import {  HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registroempleados',
  templateUrl: './registroempleados.component.html',
  styleUrls: ['./registroempleados.component.css']
})
export class RegistroempleadosComponent {

  public registroEmpleados: object = {}
  public formEmpleado : any = {}


  constructor(public _route: ActivatedRoute, public _data: DataService, public _http: HttpClient) {

  }

  // Esta funcion recoge los datos del formulario
  submitData() {
    alert('datos recibidos!')
    this.addEmpleado()
    this._data.infoEmpleados()
    return true;
  }

  borrarEmpleado(id: any) {

    alert('Datos actualizados')
    this._data.borrarEmpleado(id);

  }

  addEmpleado() {
    this._http.post(`${this._data.miEndpoint}/users`, this.registroEmpleados)
      .subscribe((responseApi) => {
        this._data.infoEmpleados();
      });
  }
  editarEmpleado() {
    alert('Datos actualizados')
    this._data.editarEmpleado(this.formEmpleado)
    return true;
  }

}
