import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})

export class RegistroPage {

  objeto: any;
  quantidade: any;
  form: FormGroup;

  formatarData() {
    var today = new Date();
    var dd: any;
    var mm: any;
    var yyyy: any;

    dd = today.getDate();
    mm = today.getMonth() + 1; //Janeiro é 0
    yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    return dd + '/' + mm + '/' + yyyy;;
  }

  createForm() {
    this.geolocation.getCurrentPosition().then((data) => {
      this.form = this.formBuilder.group({
        objeto: [this.objeto],
        quantidade: [this.quantidade],
        data: [this.formatarData()],
        status: ["Aberto"],
        latitude: [data.coords.latitude],
        longitude: [data.coords.longitude],
      });
    });
  }

  inserir() {
    this.createForm();

    this.registro_provider.save(this.form.value)
      .then(() => {
        this.toast.create({ message: 'Registrado com sucesso!', duration: 3000 }).present();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao inserir', duration: 3000 }).present();
        console.error(e);
      })
  }

  constructor(private geolocation: Geolocation, private formBuilder: FormBuilder, private toast: ToastController, private registro_provider: RegistroProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { }

}
