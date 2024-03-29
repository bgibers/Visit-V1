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
import { HttpContext } from './httpContext';
import { IResponseCookies } from './iResponseCookies';
import { PipeWriter } from './pipeWriter';
import { Stream } from './stream';

export interface HttpResponse {
  httpContext?: HttpContext;
  statusCode?: number;
  readonly headers?: { [key: string]: Array<string> };
  body?: Stream;
  bodyWriter?: PipeWriter;
  contentLength?: number;
  contentType?: string;
  cookies?: IResponseCookies;
  readonly hasStarted?: boolean;
}
