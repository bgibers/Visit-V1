import { Injectable } from '@angular/core';
import { zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: any[] = [];
  public dis: boolean;
  constructor() {}

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  open(id: string) {
    const modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.present();
  }

  close(id: string) {
    const modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.close();
  }
}
