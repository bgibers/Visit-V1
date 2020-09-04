import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BASE_PATH } from '../../../environments/environment';
import { AccountsService} from '../clients/api/accounts.service';

const TOKEN_KEY = 'ACCESS_TOKEN';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private alertController: AlertController,
                private accountService: AccountsService,
                private storage: Storage) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return from(this.accountService.getToken())
            .pipe(
                switchMap(token => {
                    if (token.auth_token) {
                        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token.auth_token) });
                    }

                    // if (!request.headers.has('Content-Type')) {
                    //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                    // }

                    return next.handle(request).pipe(
                        map((event: HttpEvent<any>) => {
                            if (event instanceof HttpResponse) {
                                // do nothing for now
                            }
                            return event;
                        }),
                        catchError((error: HttpErrorResponse) => {
                            console.log(BASE_PATH);
                            const status =  error.status;
                            const reason = error;

                            // this.presentAlert(status, reason);
                            return throwError(error);
                        })
                    );
                })
            );


    }

    async presentAlert(status, reason) {
        const alert = await this.alertController.create({
            header: status + ' Error',
            subHeader: 'Subtitle',
            message: reason,
            buttons: ['OK']
        });

        await alert.present();
    }
}

