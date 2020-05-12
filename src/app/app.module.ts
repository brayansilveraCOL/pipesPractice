import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DOMseguroPipe } from './pipes/domseguro.pipe';
import { TareaOcultarPipe } from './pipes/tarea-ocultar.pipe';
// the second parameter 'fr-FR' is optional
registerLocaleData(localEs);
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DOMseguroPipe,
    TareaOcultarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue: 'es'
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
