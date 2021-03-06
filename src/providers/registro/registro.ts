import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RegistroProvider {
  private PATH = 'registro/';

  constructor(private db: AngularFireDatabase) {
  }

  save(registro: any) {
    return new Promise((resolve, reject) => {
      console.log(registro);
      if (registro.key) {
        this.db.list(this.PATH)
          .update(registro.key, { status: registro.status })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ objeto: registro.objeto, quantidade: registro.quantidade, data: registro.data, status: registro.status, latitude: registro.latitude, longitude: registro.longitude })
          .then(() => resolve());
      }
    })
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('data'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}