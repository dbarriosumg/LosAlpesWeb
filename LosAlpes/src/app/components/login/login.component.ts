import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService,
    private router: Router,
    ) {  this.username = '';
    this.password = ''; }

  ngOnInit(): void {
  }
  username: string;
  password: string;


  login() {
    // Lógica de inicio de sesión y verificación de credenciales
    if (this.username != '' && this.password != '') {
      // Código para el inicio de sesión exitoso
      this.authService.login(this.username, this.password).subscribe((loggedIn: boolean) => {
        if (loggedIn) {
          // Login successful, navigate to home page
          this.router.navigate(['/home']);
          this.authService.setLoggedInStatus(true);
          if(this.username ==='ADMIN'){
          this.authService.setAdminStatus(true);
          }

        } else {
          // Login failed, handle the error
          // this.error = 'Credenciales incorrectas. Por favor, inténtalo nuevamente.';
        }
      });
    } else {
      // Código para el inicio de sesión fallido
      // this.error = 'Ingrese datos validos.';
    }
  }
}
