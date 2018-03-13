import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})

export class RegistroPage {

  longitude: any;
  latitude: any;
  status: any;
  data: any;
  objeto: any;
  quantidade: any;
  form: FormGroup;

  createForm() {
    
    this.data = "11/03/2018";
    this.status = "Aberto";
    this.latitude = "0000";
    this.longitude = "1111";

    this.form = this.formBuilder.group({
      objeto: [this.objeto],
      quantidade: [this.quantidade],
      data: [this.data],
      status: [this.status],
      latitude: [this.latitude],
      longitude: [this.longitude],
    });
  }

  inserir(){
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

  constructor(private formBuilder: FormBuilder, private toast: ToastController, private registro_provider: RegistroProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}
