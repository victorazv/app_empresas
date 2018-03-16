import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  mensagem: string;

  realizarLogin(login, senha) {

    if (login && senha) {

      if ((login == "pessoa" && senha == "123456") || (login == "empresa" && senha == "123456")) {
        window.localStorage.setItem("perfil",login);
        
        this.navCtrl.setRoot(HomePage);
      }
      else {
        this.mensagem = "Dados inválidos";
      }

    } else {
      this.mensagem = "Preencha o login e senha";
    }

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}