import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { AccountsService } from 'src/app/backend/clients/api/accounts.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  userEmail = '';

  constructor(
    private accountService: AccountsService,
    private modalController: ModalController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async onSubmit() {
    this.accountService.PasswordRecover(this.userEmail).then(() =>
      this.closeModal()
    );
  }
}
