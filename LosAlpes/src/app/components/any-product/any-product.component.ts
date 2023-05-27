import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { CarritoService } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-any-product',
  templateUrl: './any-product.component.html',
  styleUrls: ['./any-product.component.css']
})
export class AnyProductComponent {
  selectedCard: any;
  productName: string = ''
  producto: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService,
    private router: Router
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedCard = window.history.state.card;
      this.productName = this.selectedCard.nombrE_PRO
    });
}

redirectToCarrito() {
  this.router.navigate(['/carrito']);
}

agregarAlCarrito(){
  let obj = {
    id: this.selectedCard.iD_PRO,
    idAlmacen: this.selectedCard.inventariO_ID_ALMACEN,
    nombre: this.selectedCard.nombrE_PRO,
    img: this.selectedCard.imageN_PRO,
    precio: this.selectedCard.preciO_VENTA,
    quantity: 1,
  }
  this.carritoService.agregarProducto(obj)
}
}
