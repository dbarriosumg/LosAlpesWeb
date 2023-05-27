import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CarritoService } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  carritoAbierto = false;
  opened = false;
  isLoggedIn: any;
  isAdmin: any;
  
  constructor(public authService: AuthService,
    private router: Router,
    private car: CarritoService,
    private changeDetectorRef: ChangeDetectorRef
    ) { 
      this.authService.isLoggedIn$.subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });
  
      this.authService.isAdmin$.subscribe(isAdmin => {
        this.isAdmin = isAdmin;
      });
    }

   
  ngOnInit(): void {
  
  }

  toggleCarrito() {
    this.carritoAbierto = !this.carritoAbierto;
  }

  redirectToLogin() {
      // Actualizar el valor en el localStorage
      this.authService.setLoggedInStatus(false);
      this.authService.setAdminStatus(false);
      this.router.navigate(['/login']);
  }

  redirectToCarrito() {
    this.router.navigate(['/carrito']);

  }

  get countProducts(): number{
    return this.car.getTotalProductos()
  }

}
