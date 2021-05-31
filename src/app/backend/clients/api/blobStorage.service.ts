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
// tslint:disable: import-spacing
// tslint:disable: max-line-length

import { Inject, Injectable, Optional } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from "@angular/common/http";
import { CustomHttpUrlEncodingCodec } from "../encoder";

import { Observable } from "rxjs";

import { BASE_PATH, COLLECTION_FORMATS } from "../variables";
import { Configuration } from "../configuration";

@Injectable()
export class BlobStorageService {
  protected basePath = "https://localhost:5001";
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = "multipart/form-data";
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
   * @param fileName
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public storageDeleteFileFileNameGet(
    fileName: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<any>;
  public storageDeleteFileFileNameGet(
    fileName: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public storageDeleteFileFileNameGet(
    fileName: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public storageDeleteFileFileNameGet(
    fileName: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (fileName === null || fileName === undefined) {
      throw new Error(
        "Required parameter fileName was null or undefined when calling storageDeleteFileFileNameGet."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<any>(
      "get",
      `${this.basePath}/storage/DeleteFile/${encodeURIComponent(
        String(fileName)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param fileName
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public storageDownloadFileFileNameGet(
    fileName: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<string>;
  public storageDownloadFileFileNameGet(
    fileName: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<string>>;
  public storageDownloadFileFileNameGet(
    fileName: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<string>>;
  public storageDownloadFileFileNameGet(
    fileName: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (fileName === null || fileName === undefined) {
      throw new Error(
        "Required parameter fileName was null or undefined when calling storageDownloadFileFileNameGet."
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

    return this.httpClient.request<string>(
      "get",
      `${this.basePath}/storage/DownloadFile/${encodeURIComponent(
        String(fileName)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param userId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public storageListFilesUserIdGet(
    userId: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Array<string>>;
  public storageListFilesUserIdGet(
    userId: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<string>>>;
  public storageListFilesUserIdGet(
    userId: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<string>>>;
  public storageListFilesUserIdGet(
    userId: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling storageListFilesUserIdGet."
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

    return this.httpClient.request<Array<string>>(
      "get",
      `${this.basePath}/storage/ListFiles/${encodeURIComponent(
        String(userId)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param asset
   * @param fileName
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public storageUploadFilePostForm(
    asset?: Blob,
    fileName?: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<any>;
  public storageUploadFilePostForm(
    asset?: Blob,
    fileName?: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public storageUploadFilePostForm(
    asset?: Blob,
    fileName?: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public storageUploadFilePostForm(
    asset?: Blob,
    fileName?: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (fileName !== undefined && fileName !== null) {
      queryParameters = queryParameters.set("fileName", fileName as any);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ["multipart/form-data"];

    const canConsumeForm = this.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): void };
    let useForm = false;
    const convertFormParamsToString = false;
    // use FormData to transmit files using content-type "multipart/form-data"
    // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
    useForm = canConsumeForm;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new HttpParams({
        encoder: new CustomHttpUrlEncodingCodec(),
      });
    }

    if (asset !== undefined) {
      formParams =
        (formParams.append("asset", asset as any) as any) || formParams;
    }

    return this.httpClient.request<any>(
      "post",
      `${this.basePath}/storage/UploadFile`,
      {
        body: convertFormParamsToString ? formParams.toString() : formParams,
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }
}
