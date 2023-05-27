import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { CarritoService } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-sillas',
  templateUrl: './sillas.component.html',
  styleUrls: ['./sillas.component.css']
})
export class SillasComponent {
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


  getProductos() {
    this.api.get('/api/producto').subscribe(
      (res: any) => {
        if (res) {
          this.products = [];
          for (const product of res) {
            if (product.categoria === 'Silla') {
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
      precio: card.preciO_ALM,
      quantity: 1,
    }
    this.carritoService.agregarProducto(obj)
  }

  selectCard(card: any) {
    this.router.navigate(['/randomProduct'], { state: { card } });
  }
}
