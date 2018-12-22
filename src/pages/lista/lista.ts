import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NgForm } from "@angular/forms";

import { ListaService } from "../../services/lista-service";

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  listItems: String[];

  constructor(private lService: ListaService) {}

  ionViewWillEnter() {
    this.loadItems();
  }

  onAddItem(form: NgForm) {
    this.lService.addItem(form.value.name);
    form.reset();
    this.loadItems();
  }

  onRemoveItem(index: number) {
    this.lService.removeItem(index);
    this.loadItems();
  }

  private loadItems() {
    this.listItems = this.lService.getItems();
  }

}
