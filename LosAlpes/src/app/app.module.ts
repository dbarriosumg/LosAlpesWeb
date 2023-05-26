import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AnyProductComponent } from './components/any-product/any-product.component';
import { ArmariosComponent } from './components/armarios/armarios.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MesasComponent } from './components/comedores/mesas/mesas.component';
import { SillasComponent } from './components/comedores/sillas/sillas.component';
import { EscritoriosComponent } from './components/escritorios/escritorios.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MueblesTvComponent } from './components/muebles-tv/muebles-tv.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MesasDeCentroComponent } from './components/salas/mesas-de-centro/mesas-de-centro.component';
import { SofasComponent } from './components/salas/sofas/sofas.component';
import { SofasCamasComponent } from './components/salas/sofas-camas/sofas-camas.component';
import { MesasOutdoorComponent } from './components/outdoor/mesas-outdoor/mesas-outdoor.component';
import { SillasOutdoorComponent } from './components/outdoor/sillas-outdoor/sillas-outdoor.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { PagarComponent } from './components/pagar/pagar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministracionComponent,
    AnyProductComponent,
    ArmariosComponent,
    CarritoComponent,
    MesasComponent,
    SillasComponent,
    EscritoriosComponent,
    HomeComponent,
    LoginComponent,
    MueblesTvComponent,
    NavbarComponent,
    MesasDeCentroComponent,
    SofasComponent,
    SofasCamasComponent,
    MesasOutdoorComponent,
    SillasOutdoorComponent,
    MenuComponent,
    PagarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressBarModule,
    HttpClientModule,
    MatDatepickerModule,
    CommonModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
