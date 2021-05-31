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
import { Claim } from "./claim";
import { ClaimsIdentity } from "./claimsIdentity";
import { IIdentity } from "./iIdentity";

export interface ClaimsPrincipal {
  readonly claims?: Array<Claim>;
  readonly identities?: Array<ClaimsIdentity>;
  identity?: IIdentity;
}
