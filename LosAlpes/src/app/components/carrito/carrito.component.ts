import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CarritoService } from 'src/app/shared/services/carrito.service';
import Swal from 'sweetalert2';
import { PagarComponent } from '../pagar/pagar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
 
  productos: any[] = [];
  contadorCarrito: number = 0;
  correlativo: number = 100
  mostrarFormularioPago:boolean = false
  isPay:boolean = false
  numeroTarjeta:number = 0
  nombreTarjeta:string = ''
  fechaTarjeta:any = ''
  codigoSeguridad:number = 0
  isAlertOpen = false;
  public alertButtons = ['OK'];
  public messageAlert = ['Tu numero de pedido es #2343243'];


  pagosForm = new FormGroup({
    numeroT: new FormControl(''),
    fechaVencimiento: new FormControl(''),
    nombreTitular: new FormControl(''),
    email: new FormControl(''),
    direccionEnvio: new FormControl(''),
    nit: new FormControl(''),
    nombreFiscal: new FormControl(''),
    direccionFiscal: new FormControl(''),
    descripcion: new FormControl(''),
  });

  constructor(private carritoService: CarritoService,
    private formBuilder: FormBuilder,
    private api: ApiService,
    public authService: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.productos = this.carritoService.obtenerProductos();
    this.pagosForm = this.formBuilder.group({
    numeroT: ['',Validators.required],
    fechaVencimiento: ['',Validators.required],
    nombreTitular: ['',Validators.required],
    email: ['',Validators.required],
    direccionEnvio: ['',Validators.required],
    descripcion: ['',Validators.required],
    nit: [''],
    nombreFiscal: [''],
    direccionFiscal: [''],
    });
  }

  get countProducts(): number{
    return this.carritoService.getTotalProductos()
  }

  decreaseQuantity(producto: any) {
    if (producto.quantity > 1) {
      producto.quantity--;
      this.contadorCarrito -= 1;
    }
  }
  
  increaseQuantity(producto: any) {
    producto.quantity += 1;
    this.contadorCarrito += 1;
  }
  
  calcularTotal(): number {
    let total = 0;
    for (const producto of this.productos) {
      total += producto.precio * producto.quantity;
    }
    return total;
  }
  
  eliminarProducto(index: number): void {
    this.productos.splice(index, 1);
  }
  
  realizarPago(){
    let data = this.pagosForm.value
    // const departureDate = _moment(data.fechaCompra).format('YYYY-MM-DD');
    let obj ={
      "clienteId": this.authService.clienteId,
      "idProducto": this.productos[0].id,
      "cantidad": this.productos[0].quantity,
      "nit": data.nit,
      "nombreFiscal": data.nombreFiscal,
      "idDireccion": data.direccionFiscal,
      "subtotalFactDet": this.productos[0].precio
    }
    this.api.post('/api/compra', obj).subscribe((res:any) => {
      this.correlativo ++
      this.saveNotification()
    }, (error: HttpErrorResponse) => {
  })
}
setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
generarNumeroAleatorio(): number {
  return Math.floor(Math.random() * 9000) + 1000;
}

saveNotification(){
  Swal.fire({
    title: '',
    text: `Pedido Ingresado  Con Exito! #${this.generarNumeroAleatorio()}`,
    icon: 'success',
    confirmButtonText: 'Ok'
  });
  this.router.navigate(['/home']);
  this.pagosForm.reset()
  this.carritoService.limpiarCarrito();
}

checkOut(){
  this.isPay = true
  this.cd.detectChanges();

}
}
