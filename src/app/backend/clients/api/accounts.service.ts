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
import { Inject, Injectable, NgZone, Optional } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from "@angular/common/http";
import { CustomHttpUrlEncodingCodec } from "../encoder";

import { Observable, BehaviorSubject, from } from "rxjs";
import { take } from "rxjs/operators";
import { RegisterRequest } from "../model/registerRequest";

import { Configuration } from "../configuration";
import { MarkLocationsRequest } from "../model/markLocationsRequest";
import { BASE_PATH } from "src/environments/environment";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { Capacitor } from "@capacitor/core";

export const InterceptorSkipHeader = "X-Skip-Interceptor";

@Injectable()
export class AccountsService {
  protected basePath = BASE_PATH;
  public defaultHeaders = new HttpHeaders().set(InterceptorSkipHeader, "");
  public configuration = new Configuration();
  public authSubject = new BehaviorSubject(false);
  public userData: any;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration,
    private router: Router,
    private zone: NgZone,
    private storage: Storage,
    private ngFireAuth: AngularFireAuth
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }

    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        JSON.parse(localStorage.getItem("user"));
        this.getFcmToken().subscribe((token) => {
          console.log("FCM:" + token);
          this.accountUpdateFcmDeviceIdPost(token)
            .pipe(take(1))
            .subscribe(
              (res) => {
                console.log(res);
              },
              (err) => console.log(err)
            );
        });
      } else {
        localStorage.setItem("user", null);
        JSON.parse(localStorage.getItem("user"));
      }
    });
  }

  public async logout() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("user");
      this.zone.run(() => {
        this.router.navigate(["sign-in"]);
      });
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Email verification when new user register
  SendVerificationMail() {
    return firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        this.zone.run(() => {
          this.router.navigate(["verify-email"]);
        });
      });
  }

  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.emailVerified !== false ? true : false;
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return firebase
      .auth()
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          "Password reset email has been sent, please check your inbox."
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  async getToken() {
    try {
      return await firebase.auth().currentUser.getIdToken();
    } catch {
      return "";
    }
  }

  getUserId() {
    return firebase.auth().currentUser.uid;
  }

  // Sign in with Gmail
  // GoogleAuth() {
  //     return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  // }

  // Auth providers
  // https://www.positronx.io/ionic-firebase-authentication-tutorial-with-examples/
  // AuthLogin(provider) {
  //     return this.ngFireAuth.auth.signInWithPopup(provider)
  //     .then((result) => {
  //     this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //         })
  //     this.SetUserData(result.user);
  //     }).catch((error) => {
  //     window.alert(error)
  //     })
  // }

  // Login in with email/password
  login(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async () => {
          await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(
              (res) => {
                if (Capacitor.isNative) {
                  this.getFcmToken()
                    .pipe(take(1))
                    .subscribe((token) => {
                      this.accountUpdateFcmDeviceIdPost(token);
                      resolve(res);
                    });
                } else {
                  resolve(res);
                }
              },
              (err) => reject(err)
            );
        });
    });
  }

  public loginWithToken(token): Observable<any> {
    return from(
      firebase
        .auth()
        .signInWithCustomToken(token)
        .then(() =>
          this.getFcmToken()
            .pipe(take(1))
            .subscribe((token) => this.accountUpdateFcmDeviceIdPost(token))
        )
    );
  }

  public getFcmToken() {
    return from(this.storage.get("fcm"));
  }

  public setFcmToken(token) {
    return from(this.storage.set("fcm", token));
  }

  public accountEmailTakenGet(
    email?: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<boolean>;
  public accountEmailTakenGet(
    email?: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<boolean>>;
  public accountEmailTakenGet(
    email?: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<boolean>>;
  public accountEmailTakenGet(
    email?: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (email !== undefined && email !== null) {
      queryParameters = queryParameters.set("email", email as string);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json",
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<boolean>(
      "get",
      `${this.basePath}/account/email_taken`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }

  public accountUpdateFcmDeviceIdPost(
    deviceId: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<boolean>;
  public accountUpdateFcmDeviceIdPost(
    deviceId: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<boolean>>;
  public accountUpdateFcmDeviceIdPost(
    deviceId: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<boolean>>;
  public accountUpdateFcmDeviceIdPost(
    deviceId: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (deviceId === null || deviceId === undefined) {
      throw new Error(
        "Required parameter deviceId was null or undefined when calling accountUpdateFcmDeviceIdPost."
      );
    }

    let headers = this.defaultHeaders;

    // authentication (Bearer) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys["Authorization"]
    ) {
      headers = headers.set(
        "Authorization",
        this.configuration.apiKeys["Authorization"]
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json",
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<boolean>(
      "post",
      `${this.basePath}/account/update/fcm/${encodeURIComponent(
        String(deviceId)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  public accountRegisterPostForm(
    body?: RegisterRequest,
    blob?: Blob,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<string> {
    // public accountRegisterPostForm(body?: RegisterRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JwtToken>>;
    // public accountRegisterPostForm(body?: RegisterRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JwtToken>>;
    // public accountRegisterPostForm(body?: RegisterRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json",
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ["multipart/form-data"];

    return this.httpClient.request<string>(
      "post",
      `${this.basePath}/account/register`,
      {
        body,
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }

  /**
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountUpdateLocationsPost(
    body?: MarkLocationsRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<boolean>;
  public accountUpdateLocationsPost(
    body?: MarkLocationsRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<boolean>>;
  public accountUpdateLocationsPost(
    body?: MarkLocationsRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<boolean>>;
  public accountUpdateLocationsPost(
    body?: MarkLocationsRequest,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json",
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json",
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.request<boolean>(
      "post",
      `${this.basePath}/account/update/locations`,
      {
        body,
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }

  /**
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountUpdateProfileImagePost(
    blob?: Blob,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<boolean>;
  public accountUpdateProfileImagePost(
    blob?: Blob,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<boolean>>;
  public accountUpdateProfileImagePost(
    blob?: Blob,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<boolean>>;
  public accountUpdateProfileImagePost(
    blob?: Blob,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json",
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json",
    ];

    const body = new FormData();
    body.append("image", blob);

    return this.httpClient.request<boolean>(
      "post",
      `${this.basePath}/account/update/profile_image`,
      {
        body,
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }

  public accountUpdatePost(
    firstname?: string,
    lastname?: string,
    title?: string,
    education?: string,
    birthLocation?: string,
    residenceLocation?: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<boolean>;
  public accountUpdatePost(
    firstname?: string,
    lastname?: string,
    title?: string,
    education?: string,
    birthLocation?: string,
    residenceLocation?: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<boolean>>;
  public accountUpdatePost(
    firstname?: string,
    lastname?: string,
    title?: string,
    education?: string,
    birthLocation?: string,
    residenceLocation?: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<boolean>>;
  public accountUpdatePost(
    firstname?: string,
    lastname?: string,
    title?: string,
    education?: string,
    birthLocation?: string,
    residenceLocation?: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (firstname !== undefined && firstname !== null) {
      queryParameters = queryParameters.set("Firstname", firstname as any);
    }
    if (lastname !== undefined && lastname !== null) {
      queryParameters = queryParameters.set("Lastname", lastname as any);
    }
    if (title !== undefined && title !== null) {
      queryParameters = queryParameters.set("Title", title as any);
    }
    if (education !== undefined && education !== null) {
      queryParameters = queryParameters.set("Education", education as any);
    }
    if (birthLocation !== undefined && birthLocation !== null) {
      queryParameters = queryParameters.set(
        "BirthLocation",
        birthLocation as any
      );
    }
    if (residenceLocation !== undefined && residenceLocation !== null) {
      queryParameters = queryParameters.set(
        "ResidenceLocation",
        residenceLocation as any
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json",
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<boolean>(
      "post",
      `${this.basePath}/account/update`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }
}
