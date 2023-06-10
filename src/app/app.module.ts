import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CsgoskinsComponent } from './csgoskins/csgoskins.component';
import { AppRoutingModule } from './app-routing.module';
import { SkinsComponent } from './skins/skins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    CsgoskinsComponent,
    SkinsComponent,
    DashboardComponent,
    HeaderComponent,
    BuscadorComponent,
    FooterComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
