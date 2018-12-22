import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { CardPage } from './../pages/card/card';
import { CalculadoraPage } from './../pages/calculadora/calculadora';
import { ListaPage } from './../pages/lista/lista';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaService } from '../services/lista-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ListaPage,
    CalculadoraPage,
    CardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListaPage,
    CalculadoraPage,
    CardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaService
  ]
})
export class AppModule {}
