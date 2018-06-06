import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  termino:string = undefined;
  constructor(private route:ActivatedRoute,
              private _ps:ProductosService) {
    route.params.subscribe(par=>{
      //console.log(par['termino']);
      this.termino = par['termino'];
    });
    _ps.buscar_producto(this.termino);
  }
}
