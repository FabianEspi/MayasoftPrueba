import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { CardsComponent } from './components/cards/cards.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CardsProductoComponent } from './components/cards-producto/cards-producto.component';
import { ClientesPersonasComponent } from './components/clientes-personas/clientes-personas.component';
import { ContentVComponent } from './components/content-v/content-v.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { ProductosempComponent } from './components/productosemp/productosemp.component';
import {RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuerpoComponent,
    CardsComponent,
    ClientesComponent,
    CardsProductoComponent,
    ClientesPersonasComponent,
    ContentVComponent,
    PreguntasComponent,
    PaquetesComponent,
    ProductosempComponent
   
  ],
  imports: [
    BrowserModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
