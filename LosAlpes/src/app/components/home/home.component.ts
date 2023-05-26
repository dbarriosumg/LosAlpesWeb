import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Producto } from 'src/app/interfaces/producto';
import { ApiService } from 'src/app/shared/services/api.service';
import { CarritoService } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos: Producto[] = [];
  cards: any[] = [];


  constructor(
    private carritoService: CarritoService,
    private api: ApiService,
    private router: Router,
    private menuController: MenuController
  ) { }

  ngOnInit(): void {
    this.getProductos()
  }
  toggleMenu(){
    this.menuController.toggle()
  }

  get countProducts(): number{
    return this.carritoService.getTotalProductos()
  }

  //metodo que obtiene datos de los prodcutor
  getProductos(){
    this.api.get('/api/producto').subscribe((res: any)=>{
      if(res){
        this.cards = res
      }
    },(error: HttpErrorResponse) => {
  })
  }

  selectCard(card: any) {
    this.router.navigate(['/randomProduct'], { state: { card } });
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
