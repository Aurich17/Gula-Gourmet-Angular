import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWebComponent } from './main-web/main-web.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponentComponent } from './componentes/carrusel-component/carrusel-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWebComponent,
    CarruselComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
