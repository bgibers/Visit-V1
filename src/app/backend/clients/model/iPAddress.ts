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
import { AddressFamily } from './addressFamily';

export interface IPAddress { 
    addressFamily?: AddressFamily;
    scopeId?: number;
    readonly isIPv6Multicast?: boolean;
    readonly isIPv6LinkLocal?: boolean;
    readonly isIPv6SiteLocal?: boolean;
    readonly isIPv6Teredo?: boolean;
    readonly isIPv4MappedToIPv6?: boolean;
    address?: number;
}