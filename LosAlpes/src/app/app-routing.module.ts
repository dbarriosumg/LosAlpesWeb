import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArmariosComponent } from './components/armarios/armarios.component';
import { MesasComponent } from './components/comedores/mesas/mesas.component';
import { SillasComponent } from './components/comedores/sillas/sillas.component';
import { EscritoriosComponent } from './components/escritorios/escritorios.component';
import { MueblesTvComponent } from './components/muebles-tv/muebles-tv.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { LoginComponent } from './components/login/login.component';
import { SofasCamasComponent } from './components/salas/sofas-camas/sofas-camas.component';
import { MesasOutdoorComponent } from './components/outdoor/mesas-outdoor/mesas-outdoor.component';
import { SillasOutdoorComponent } from './components/outdoor/sillas-outdoor/sillas-outdoor.component';
import { AnyProductComponent } from './components/any-product/any-product.component';
import { SofasComponent } from './components/salas/sofas/sofas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'armarios', component: ArmariosComponent},
  {path: 'mesas', component: MesasComponent},
  {path: 'sillas', component: SillasComponent},
  {path: 'escritorios', component: EscritoriosComponent},
  {path: 'mueblesTv', component: MueblesTvComponent},
  {path: 'sofas-camas', component: SofasCamasComponent},
  {path: 'sofas', component: SofasComponent},
  {path: 'outdoor-mesas', component: MesasOutdoorComponent},
  {path: 'outdoor-sillas', component: SillasOutdoorComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'administracion', component: AdministracionComponent},
  {path: 'randomProduct', component: AnyProductComponent},
  { path: '**', component: LoginComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
