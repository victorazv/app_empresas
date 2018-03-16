import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MapaPage } from '../pages/mapa/mapa';
import { RegistroPage } from '../pages/registro/registro';
import { RegistrosPendentesPage } from '../pages/registros-pendentes/registros-pendentes';
import { HistoricoPage } from '../pages/historico/historico';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, perfil: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, perfil: "todos" },
      { title: 'Registro', component: RegistroPage, perfil: "pessoa"  },
      { title: 'Histórico', component: HistoricoPage, perfil: "pessoa"  },
      { title: 'Mapa', component: MapaPage, perfil: "empresa"  },
      { title: 'Registros pendentes', component: RegistrosPendentesPage, perfil: "empresa"  },
    ];   

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
