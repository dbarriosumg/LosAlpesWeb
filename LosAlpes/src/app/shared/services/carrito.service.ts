import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  eliminarProducto(producto: Producto) {
    const index = this.productos.indexOf(producto);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }

  obtenerProductos() {
    return this.productos;
  }

  getTotalProductos(){
    return this.productos.length
  }

  limpiarCarrito(){
    this.productos = []
  }
}
