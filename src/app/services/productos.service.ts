import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando_productos:boolean = true;
  constructor(private http:Http) {
    this.cargar_productos();
  }

  public buscar_producto(termino:string){
    //console.log('buscando productos');
    //console.log(termino);
  //  console.log(this.productos.length);
    if(this.productos.length === 0){
      this.cargar_productos().then(()=>{
        //termino la carga
        this.filtrar_productos(termino);
      });
    }
    else{
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino:string){
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod=>{
      if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0){
        this.productos_filtrado.push(prod);
        //console.log(prod);
      }
    });
  }

  public cargar_producto(cod:string){
    return this.http.get(`https://paginaweb-a6599.firebaseio.com/productos/${cod}.json`)
  }

  public cargar_productos(){
    this.cargando_productos=true;
    let promesa = new Promise((resolve, reject) => {
      //  if(this.productos.length === 0){
      this.http.get('https://paginaweb-a6599.firebaseio.com/productos_idx.json')
      .subscribe(data => {
        //  setTimeout(()=>{
        this.productos = data.json();
        this.cargando_productos=false;
        //}, 2500);
        //console.log(data.json())
      });
        //    }
      resolve();
    });
    return promesa;
  }
}
