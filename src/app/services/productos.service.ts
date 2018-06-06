import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:any[] = [];
  cargando_productos:boolean = true;
  constructor(private http:Http) {
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando_productos=true;
  //  if(this.productos.length === 0){
      this.http.get('https://paginaweb-a6599.firebaseio.com/productos_idx.json')
      .subscribe(data => {
        this.cargando_productos=false;
         console.log(data.json())});
//    }
  }
}
