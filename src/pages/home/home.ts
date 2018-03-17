import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  perfil: string;
  constructor(public navCtrl: NavController) {}

  ajustarMenu(){
    this.perfil = window.localStorage.getItem('perfil');
    
    if (this.perfil == "empresa") {
      document.getElementById("empresa1").style.display = 'none';
      document.getElementById("empresa2").style.display = 'none';
      document.getElementById("pessoa1").style.display = 'block';
      document.getElementById("pessoa2").style.display = 'block';

    } else {
      document.getElementById("empresa1").style.display = 'block';
      document.getElementById("empresa2").style.display = 'block';
      document.getElementById("pessoa1").style.display = 'none';
      document.getElementById("pessoa2").style.display = 'none';
    }
    
  }

  ionViewDidLoad() { 
    this.ajustarMenu();
  }


}