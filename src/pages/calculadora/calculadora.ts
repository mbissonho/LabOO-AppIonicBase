import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgForm } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {

  private result;
  private operation = undefined;
  private vA;
  private vB;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  onGetResult(form: NgForm){
    if(this.operation == undefined || !this.isValid(Number.parseInt(form.value.vA), Number.parseInt(form.value.vB))){
      window.alert("Algo de errado não está certo!");
    }else{
      this.vA = form.value.vA;
      this.vB = form.value.vB;
      this.result = eval(this.vA+this.operation+this.vB);
      alert("Resultado: "+this.result);
    }
  }

  isValid(vA , vB) : boolean{
    return Number.isInteger(vA) && Number.isInteger(vB); 
  }

  radioChecked(value: String){
    this.operation = value;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }

}
