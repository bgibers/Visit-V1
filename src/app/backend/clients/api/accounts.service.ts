/**
 * My Title
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
// tslint:disable: max-line-length
// tslint:disable: import-spacing
import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable, BehaviorSubject }                                        from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtToken } from '../model/jwtToken';
import { LoginApiRequest } from '../model/loginApiRequest';
import { RegisterRequest } from '../model/registerRequest';

import { Configuration }                                     from '../configuration';
import { MarkLocationsRequest } from '../model/markLocationsRequest';
import { BASE_PATH } from 'src/environments/environment';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class AccountsService {

    protected basePath = BASE_PATH;
    public defaultHeaders = new HttpHeaders().set(InterceptorSkipHeader, '');
    public configuration = new Configuration();
    public authSubject = new BehaviorSubject(false);
    public token: BehaviorSubject<JwtToken> = new BehaviorSubject({});

    constructor(protected httpClient: HttpClient,
                @Optional()@Inject(BASE_PATH) basePath: string,
                @Optional() configuration: Configuration,
                private platform: Platform,
                private storage: Storage ) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }

        this.platform.ready().then(() => {
            this.ifLoggedIn();
          });
    }

    public setAuthSubject() {
        this.authSubject.next(true);
    }

    public async logout() {
        await this.storage.remove('ACCESS_TOKEN');
        await this.storage.remove('USER_ID');
        await this.storage.remove('USER');
        await this.storage.remove('EXPIRES_IN');
        this.authSubject.next(false);
    }

    public isLoggedIn() {
        return this.authSubject.value;
    }

    public async getUserTokenFromStorage(): Promise<JwtToken> {
        if (this.isLoggedIn) {
            const token: JwtToken = {
                auth_token: await this.storage.get('ACCESS_TOKEN'),
                id: await this.storage.get('USER_ID'),
                expires_in: await this.storage.get('EXPIRES_IN')
            } as JwtToken;

            return token;
        }
    }

    // public async getLoggedInUser(): Promise<LoggedInUser> {
    //     if (this.isLoggedIn) {
    //         const user: LoggedInUser = await this.storage.get('USER') as LoggedInUser;
    //         return user;
    //     }
    // }

    ifLoggedIn() {
        this.storage.get('USER').then((response) => {
          if (response) {
            this.authSubject.next(true);
          }
        });
      }

    public getToken() {
        return this.token;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     *
     *
     * @param requestApi
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountsLogin(requestApi: LoginApiRequest, observe?: 'body', reportProgress?: boolean): Observable<JwtToken> {
    // public accountsLogin(requestApi: LoginApiRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JwtToken>>;
    // public accountsLogin(requestApi: LoginApiRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JwtToken>>;
    // public accountsLogin(requestApi: LoginApiRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (requestApi === null || requestApi === undefined) {
            throw new Error('Required parameter requestApi was null or undefined when calling accountsLogin.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<JwtToken>(`${this.basePath}/account/login`,
            requestApi,
            {
                withCredentials: this.configuration.withCredentials,
                headers,
                observe,
                reportProgress
            }
        ).pipe(
            tap(async ( res: JwtToken ) => {
                if (res.auth_token !== null) {
                    this.token.next(res);
                    await this.storage.set('ACCESS_TOKEN', res.auth_token);
                    await this.storage.set('USER_ID', res.id);
                    await this.storage.set('EXPIRES_IN', res.expires_in);
                    this.authSubject.next(true);
                } else {

                }
            })
        );
    }

     /**
     *
     *
     * @param email
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountEmailTakenGet(email?: string, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public accountEmailTakenGet(email?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public accountEmailTakenGet(email?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public accountEmailTakenGet(email?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email',  email as string);
        }

        let headers = this.defaultHeaders;



        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<boolean>('get', `${this.basePath}/account/email_taken`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers,
            observe,
            reportProgress
        }
        );
    }

 /**
     *
     *
     * @param email
     * @param password
     * @param firstname
     * @param lastname
     * @param birthday
     * @param title
     * @param education
     * @param avi
     * @param facebookId
     * @param birthLocation
     * @param residenceLocation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountRegisterPostForm(body?: RegisterRequest, observe?: 'body', reportProgress?: boolean): Observable<JwtToken> {
    // public accountRegisterPostForm(body?: RegisterRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JwtToken>>;
    // public accountRegisterPostForm(body?: RegisterRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JwtToken>>;
    // public accountRegisterPostForm(body?: RegisterRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;



        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        return this.httpClient.request<JwtToken>('post', `${this.basePath}/account/register`,
            {
                body,
                withCredentials: this.configuration.withCredentials,
                headers,
                observe,
                reportProgress
            }
        ).pipe(
            tap(async ( res: JwtToken ) => {
                if (res.auth_token) {
                    this.token.next(res);
                    await this.storage.set('ACCESS_TOKEN', res.auth_token);
                    await this.storage.set('USER_ID', res.id);
                    await this.storage.set('EXPIRES_IN', res.expires_in);
                    this.authSubject.next(true);
                    // if (!postRegister) {
                    //     this.authSubject.next(true);
                    // }
                }
            })
        );
    }

    /**
     *
     *
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountUpdateLocationsPost(body?: MarkLocationsRequest, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public accountUpdateLocationsPost(body?: MarkLocationsRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public accountUpdateLocationsPost(body?: MarkLocationsRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public accountUpdateLocationsPost(body?: MarkLocationsRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;



        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('post', `${this.basePath}/account/update/locations`,
            {
                body,
                withCredentials: this.configuration.withCredentials,
                headers,
                observe,
                reportProgress
            }
        );
    }

    /**
     *
     *
     * @param image
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountUpdateProfileImagePostForm(image?: Blob, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public accountUpdateProfileImagePostForm(image?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public accountUpdateProfileImagePostForm(image?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public accountUpdateProfileImagePostForm(image?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;



        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        const convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (image !== undefined) {
            formParams = formParams.append('image',  image as any) as any || formParams;
        }

        return this.httpClient.request<boolean>('post', `${this.basePath}/account/update/profile_image`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers,
                observe,
                reportProgress
            }
        );
    }

}
