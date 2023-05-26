import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { CarritoService } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent {
  products: any[] = [];

  constructor(
    private api: ApiService,
    private carritoService: CarritoService,
    private router: Router

  ) {
    
   }

  ngOnInit(): void {
    this.getProductos()
  }

  get countProducts(): number{
    return this.carritoService.getTotalProductos()
  }

  getProductos() {
    this.api.get('/api/producto').subscribe(
      (res: any) => {
        if (res) {
          this.products = [];
          for (const product of res) {
            if (product.categoria =='Mesas') {
              this.products.push(product);
            }
          }
        }
      },
      (error: HttpErrorResponse) => {
        // Manejo de errores
      }
    );
  }

  agregarAlCarrito(card : any){
    let obj = {
      id: card.iD_PRO,
      idAlmacen: card.inventariO_ID_ALMACEN,
      nombre: card.nombrE_PRO,
      img: card.imageN_PRO,
      precio: 300,
      quantity: 1,
    }
    this.carritoService.agregarProducto(obj)
  }
}
