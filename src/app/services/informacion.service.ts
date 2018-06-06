import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  info:any ={};
  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;
  equipo:any[] = [];
  constructor(public http:Http) {
    this.carga_info();
    this.carga_Nosotros();
  }

  public carga_info(){
    this.http.get("./assets/data/info.pagina.json").subscribe(data => {
      //console.log(data.json());
      this.info=data.json();
      this.cargada = true;
    })
  }

  public carga_Nosotros(){
    this.http.get("https://paginaweb-a6599.firebaseio.com/equipo.json").subscribe(data => {
      //console.log(data.json());
      this.equipo=data.json();
      this.cargada_sobre_nosotros = true;
    })
  }
}
