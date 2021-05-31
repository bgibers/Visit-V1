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
import { CustomAttributeData } from './customAttributeData';
import { MemberTypes } from './memberTypes';
import { Module } from './module';
import { Type } from './type';

export interface MemberInfo {
  memberType?: MemberTypes;
  declaringType?: Type;
  reflectedType?: Type;
  readonly name?: string;
  module?: Module;
  readonly customAttributes?: Array<CustomAttributeData>;
  readonly isCollectible?: boolean;
  readonly metadataToken?: number;
}
