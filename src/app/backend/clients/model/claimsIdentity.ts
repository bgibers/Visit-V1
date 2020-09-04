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
import { Claim } from './claim';

export interface ClaimsIdentity { 
    readonly authenticationType?: string;
    readonly isAuthenticated?: boolean;
    actor?: ClaimsIdentity;
    bootstrapContext?: any;
    readonly claims?: Array<Claim>;
    label?: string;
    readonly name?: string;
    readonly nameClaimType?: string;
    readonly roleClaimType?: string;
}