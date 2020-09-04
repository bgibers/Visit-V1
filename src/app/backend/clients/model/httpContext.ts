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
 */
import { CancellationToken } from './cancellationToken';
import { ClaimsPrincipal } from './claimsPrincipal';
import { ConnectionInfo } from './connectionInfo';
import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';
import { IServiceProvider } from './iServiceProvider';
import { ISession } from './iSession';
import { TypeObjectKeyValuePair } from './typeObjectKeyValuePair';
import { WebSocketManager } from './webSocketManager';

export interface HttpContext { 
    readonly features?: Array<TypeObjectKeyValuePair>;
    request?: HttpRequest;
    response?: HttpResponse;
    connection?: ConnectionInfo;
    webSockets?: WebSocketManager;
    user?: ClaimsPrincipal;
    items?: { [key: string]: any; };
    requestServices?: IServiceProvider;
    requestAborted?: CancellationToken;
    traceIdentifier?: string;
    session?: ISession;
}