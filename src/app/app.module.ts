import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MapaPage } from '../pages/mapa/mapa';
import { RegistroPage } from '../pages/registro/registro';
import { RegistrosPendentesPage } from '../pages/registros-pendentes/registros-pendentes';
import { HistoricoPage } from '../pages/historico/historico';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegistroProvider } from '../providers/registro/registro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MapaPage,
    RegistroPage,
    RegistrosPendentesPage,
    HistoricoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDGnEVOpv8IMOIcGAqdT3nMpTsv-aJkxA8",
      authDomain: "appitalotcc.firebaseapp.com",
      databaseURL: "https://appitalotcc.firebaseio.com",
      projectId: "appitalotcc",
      storageBucket: "appitalotcc.appspot.com",
      messagingSenderId: "432502273233"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MapaPage,
    RegistroPage,
    RegistrosPendentesPage,
    HistoricoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RegistroProvider,
    Geolocation
  ]
})
export class AppModule { }
