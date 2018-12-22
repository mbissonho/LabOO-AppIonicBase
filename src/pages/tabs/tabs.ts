import { CardPage } from './../card/card';
import { CalculadoraPage } from './../calculadora/calculadora';
import { ListaPage } from './../lista/lista';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListaPage;
  tab2Root = CalculadoraPage;
  tab3Root = CardPage;

  constructor() {

  }
}
