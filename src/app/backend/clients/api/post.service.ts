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
 *//* tslint:disable:no-unused-variable member-ordering */
// tslint:disable: max-line-length
// tslint:disable: import-spacing
import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { PostPaginatedList } from '../model/postPaginatedList';
import { BASE_PATH } from 'src/environments/environment';

import { COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CreatePostRequest } from '../model/createPostRequest';
import { NewPostResponse } from '../model/newPostResponse';
const InterceptorSkipHeader = 'X-Skip-Interceptor';


@Injectable()
export class PostService {
    protected basePath = BASE_PATH;
    public defaultHeaders = new HttpHeaders().set(InterceptorSkipHeader, '');
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient,
                @Optional()@Inject(BASE_PATH) basePath: string,
                @Optional() configuration: Configuration ) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     *
     *
     * @param post
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postsNewPost(post?: CreatePostRequest, blob?: Blob, observe?: 'body', reportProgress?: boolean): Observable<NewPostResponse>;
    public postsNewPost(post?: CreatePostRequest, blob?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewPostResponse>>;
    public postsNewPost(post?: CreatePostRequest, blob?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewPostResponse>>;
    public postsNewPost(post?: CreatePostRequest, blob?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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


        const body = new FormData();
        body.append('post', JSON.stringify(post));

        if (blob) {
            body.append('image', blob);
        }

        return this.httpClient.request<NewPostResponse>('post', `${this.basePath}/posts/new`,
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
     * @param page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postsPostsPageGet(page: number, observe?: 'body', reportProgress?: boolean): Observable<PostPaginatedList>;
    public postsPostsPageGet(page: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PostPaginatedList>>;
    public postsPostsPageGet(page: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PostPaginatedList>>;
    public postsPostsPageGet(page: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling postsPostsPageGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
        }

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

        return this.httpClient.request<PostPaginatedList>('get', `${this.basePath}/posts/${encodeURIComponent(String(page))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers,
                observe,
                reportProgress
            }
        );
    }

}
