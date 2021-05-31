/**
 * Visit
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */
// tslint:disable: no-redundant-jsdoc
// tslint:disable: max-line-length
// tslint:disable: import-spacing
import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { PostPaginatedList } from '../model/postPaginatedList';
import { BASE_PATH } from 'src/environments/environment';

import { COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { CreatePostRequest } from '../model/createPostRequest';
import { NewPostResponse } from '../model/newPostResponse';
import { CommentForPost } from '../model/commentForPost';
import { LikeForPost } from '../model/likeForPost';
import { PostApiPaginatedList } from '../model/postApiPaginatedList';
import { CommentApi } from '../model/commentApi';
import { string } from '@amcharts/amcharts4/core';
const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class PostService {
  protected basePath = BASE_PATH;
  public defaultHeaders = new HttpHeaders().set(InterceptorSkipHeader, '');
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
   * @param postId
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postsCommentPostIdPost(
    postId: string,
    body?: CommentApi,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<boolean>;
  public postsCommentPostIdPost(
    postId: string,
    body?: CommentApi,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<boolean>>;
  public postsCommentPostIdPost(
    postId: string,
    body?: CommentApi,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<boolean>>;
  public postsCommentPostIdPost(
    postId: string,
    body?: CommentApi,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (postId === null || postId === undefined) {
      throw new Error(
        'Required parameter postId was null or undefined when calling postsCommentPostIdPost.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      'text/plain',
      'application/json',
      'text/json',
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json-patch+json',
      'application/json',
      'text/json',
      'application/_*+json',
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<boolean>(
      'post',
      `${this.basePath}/posts/comment/${encodeURIComponent(String(postId))}`,
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
   * @param postId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postsCommentsGetPostIdGet(
    postId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<CommentForPost>>;
  public postsCommentsGetPostIdGet(
    postId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<CommentForPost>>>;
  public postsCommentsGetPostIdGet(
    postId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<CommentForPost>>>;
  public postsCommentsGetPostIdGet(
    postId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (postId === null || postId === undefined) {
      throw new Error(
        'Required parameter postId was null or undefined when calling postsCommentsGetPostIdGet.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      'text/plain',
      'application/json',
      'text/json',
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<Array<CommentForPost>>(
      'get',
      `${this.basePath}/posts/comments/get/${encodeURIComponent(
        String(postId)
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
   * @param postId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postsLikePostIdPost(
    postId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<boolean>;
  public postsLikePostIdPost(
    postId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<boolean>>;
  public postsLikePostIdPost(
    postId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<boolean>>;
  public postsLikePostIdPost(
    postId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (postId === null || postId === undefined) {
      throw new Error(
        'Required parameter postId was null or undefined when calling postsLikePostIdPost.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      'text/plain',
      'application/json',
      'text/json',
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<boolean>(
      'post',
      `${this.basePath}/posts/like/${encodeURIComponent(String(postId))}`,
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
   * @param postId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postsLikesGetPostIdGet(
    postId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<LikeForPost>>;
  public postsLikesGetPostIdGet(
    postId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<LikeForPost>>>;
  public postsLikesGetPostIdGet(
    postId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<LikeForPost>>>;
  public postsLikesGetPostIdGet(
    postId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (postId === null || postId === undefined) {
      throw new Error(
        'Required parameter postId was null or undefined when calling postsLikesGetPostIdGet.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      'text/plain',
      'application/json',
      'text/json',
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<Array<LikeForPost>>(
      'get',
      `${this.basePath}/posts/likes/get/${encodeURIComponent(String(postId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }
  /**
   * @param caption
   * @param postType
   * @param locationCode
   * @param image
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postsNewPostForm(
    caption?: string,
    postType?: string,
    locationCode?: string,
    image?: Blob,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<NewPostResponse>;
  public postsNewPostForm(
    caption?: string,
    postType?: string,
    locationCode?: string,
    image?: Blob,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<NewPostResponse>>;
  public postsNewPostForm(
    caption?: string,
    postType?: string,
    locationCode?: string,
    image?: Blob,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<NewPostResponse>>;
  public postsNewPostForm(
    caption?: string,
    postType?: string,
    locationCode?: string,
    image?: Blob,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      'text/plain',
      'application/json',
      'text/json',
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['multipart/form-data'];

    let formParams: { append(param: string, value: any): void };
    formParams = new FormData();

    const convertFormParamsToString = false;

    if (caption !== undefined) {
      formParams =
        (formParams.append('Caption', caption as any) as any) || formParams;
    }
    if (postType !== undefined) {
      formParams =
        (formParams.append('PostType', postType as any) as any) || formParams;
    }
    if (locationCode !== undefined) {
      formParams =
        (formParams.append('LocationCode', locationCode as any) as any) ||
        formParams;
    }
    if (image !== undefined) {
      formParams =
        (formParams.append('Image', image as any) as any) || formParams;
    }

    return this.httpClient.request<NewPostResponse>(
      'post',
      `${this.basePath}/posts/new`,
      {
        body: convertFormParamsToString ? formParams.toString() : formParams,
        withCredentials: this.configuration.withCredentials,
        headers,
        observe,
        reportProgress,
      }
    );
  }

  /**
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postsPageGet(
    page: number,
    filter: string,
    userId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<PostApiPaginatedList>;
  public postsPageGet(
    page: number,
    filter: string,
    userId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<PostApiPaginatedList>>;
  public postsPageGet(
    page: number,
    filter: string,
    userId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<PostApiPaginatedList>>;
  public postsPageGet(
    page: number,
    filter: string,
    userId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling postsPageGet.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      'text/plain',
      'application/json',
      'text/json',
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    let uri = `${this.basePath}/posts/${encodeURIComponent(String(page))}`;

    if (filter !== '' && userId === '') {
      uri = `${this.basePath}/posts/${encodeURIComponent(
        String(page)
      )}/filter/${encodeURIComponent(String(filter))}`;
    } else if (userId !== '' && filter === '') {
      uri = `${this.basePath}/posts/${encodeURIComponent(
        String(page)
      )}/user/${encodeURIComponent(String(userId))}`;
    } else if (userId !== '' && filter !== '') {
      uri = `${this.basePath}/posts/${encodeURIComponent(
        String(page)
      )}/${encodeURIComponent(String(filter))}/${encodeURIComponent(
        String(userId)
      )}`;
    }

    return this.httpClient.request<PostApiPaginatedList>('get', uri, {
      withCredentials: this.configuration.withCredentials,
      headers,
      observe,
      reportProgress,
    });
  }
}
