
import { registerLocaleData } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from '@shared/shared.module';
import { VentasModule } from '@ventas/ventas.module';

import spanishLanguajeMx from '@angular/common/locales/es-MX'
import JapanLanguajeJp from '@angular/common/locales/ja'


registerLocaleData(spanishLanguajeMx);
registerLocaleData(JapanLanguajeJp);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
