import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { ApiService } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();

  clienteId: number = 0;
  
  constructor(
    private router: Router,
    private api: ApiService,
  ) { 
    this.checkLoggedInStatus();
    this.checkAdminStatus();

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private checkLoggedInStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isLoggedInSubject.next(isLoggedIn);
  }

  private checkAdminStatus() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    this.isAdminSubject.next(isAdmin);
  }

  setLoggedInStatus(isLoggedIn: boolean) {
    this.isLoggedInSubject.next(isLoggedIn);
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }

  setAdminStatus(isAdmin: boolean) {
    this.isAdminSubject.next(isAdmin);
    localStorage.setItem('isAdmin', isAdmin.toString());
  }
// ...

login(username: string, password: string): Observable<boolean> {
  return this.api.get(`/api/login?usuario=${username}&pass=${password}`)
    .pipe(
      map((res: any) => {
        if (res && res[0].tipo === 'admin') {
          localStorage.setItem('isAdmin', 'true');
        }
        localStorage.setItem('isLoggedIn', 'true');
        this.clienteId = res[0].iD_CLIENTE;
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        return of(false);
      })
    );
}



  logout() {
    // Lógica de cierre de sesión aquí
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('isAdmin', 'false')
    this.router.navigate(['/login']);

  }
}
