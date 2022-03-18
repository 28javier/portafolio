import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AcercademiComponent } from './shared/acercademi/acercademi.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { PortafolioComponent } from './shared/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactoComponent,
    NavbarComponent,
    AcercademiComponent,
    InicioComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
