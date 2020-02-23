import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public miEndpoint: string = "https://proxy-neoland.ga";
  public listaEmpleados: any = [];
  public empleados: any = [];
  public id : any ;
  public registroEmpleados: object = {}


  constructor(public _http: HttpClient) {

    let httpConfig: object = {
      "headers": new HttpHeaders({
        "content-type": 'application/json'
      })

    };
    this.infoEmpleados(), httpConfig;

  }
  infoEmpleados() {
    this._http.get(`${this.miEndpoint}/users`)
      .subscribe((responseApi) => {
        this.listaEmpleados = responseApi;
        this.empleados = this.listaEmpleados;
        console.log(this.empleados)

      });
  }
  borrarEmpleado(indice: string) {
    let empleadoEliminado = this.listaEmpleados[indice]['id']
    this._http.delete(`${this.miEndpoint}/user/${empleadoEliminado}`)
      .subscribe((responseApi) => {
        console.log(`${this.miEndpoint}/user/${empleadoEliminado}`)
        this.infoEmpleados();

      });
  }
  editarEmpleado(data) {

    let httpConfig: object = {
      "headers": new HttpHeaders({
        "content-type": 'application/json'
      })
    };

    this._http.put(`${this.miEndpoint}/users`, data, httpConfig)
    .subscribe((responseApi) => {
      this.infoEmpleados();

    });
  }

}

