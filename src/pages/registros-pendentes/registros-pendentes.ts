import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistroProvider } from '../../providers/registro/registro';

@IonicPage()
@Component({
  selector: 'page-registros-pendentes',
  templateUrl: 'registros-pendentes.html',
})
export class RegistrosPendentesPage {

  form: FormGroup;
  registros: any;

  constructor(private formBuilder: FormBuilder, private toast: ToastController, private registroProvider: RegistroProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ajustarStatus(key, status) {

    this.form = this.formBuilder.group({
      key: [key],
      status: [status],
    });

    this.registroProvider.save(this.form.value)

      .then(() => {
        this.toast.create({ message: 'Registrado com sucesso!', duration: 3000 }).present();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao salvar', duration: 3000 }).present();
        console.error(e);
      })
  }

  ionViewDidLoad() {
    this.registros = this.registroProvider.getAll();
  }

}