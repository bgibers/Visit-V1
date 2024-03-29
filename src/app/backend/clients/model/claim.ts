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
import { ClaimsIdentity } from './claimsIdentity';

export interface Claim {
  readonly issuer?: string;
  readonly originalIssuer?: string;
  readonly properties?: { [key: string]: string };
  subject?: ClaimsIdentity;
  readonly type?: string;
  readonly value?: string;
  readonly valueType?: string;
}
