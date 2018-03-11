import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrosPendentesPage } from './registros-pendentes';

@NgModule({
  declarations: [
    RegistrosPendentesPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrosPendentesPage),
  ],
})
export class RegistrosPendentesPageModule {}
