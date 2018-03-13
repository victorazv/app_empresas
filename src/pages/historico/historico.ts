import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  registros: any;
  constructor(private registroProvider:RegistroProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionView

  ionViewDidLoad() {
    this.registros = this.registroProvider.getAll();
  }

}
