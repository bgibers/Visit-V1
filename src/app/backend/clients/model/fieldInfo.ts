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
import { FieldAttributes } from './fieldAttributes';
import { MemberTypes } from './memberTypes';
import { Module } from './module';
import { RuntimeFieldHandle } from './runtimeFieldHandle';
import { Type } from './type';

export interface FieldInfo {
  memberType?: MemberTypes;
  attributes?: FieldAttributes;
  fieldType?: Type;
  readonly isInitOnly?: boolean;
  readonly isLiteral?: boolean;
  readonly isNotSerialized?: boolean;
  readonly isPinvokeImpl?: boolean;
  readonly isSpecialName?: boolean;
  readonly isStatic?: boolean;
  readonly isAssembly?: boolean;
  readonly isFamily?: boolean;
  readonly isFamilyAndAssembly?: boolean;
  readonly isFamilyOrAssembly?: boolean;
  readonly isPrivate?: boolean;
  readonly isPublic?: boolean;
  readonly isSecurityCritical?: boolean;
  readonly isSecuritySafeCritical?: boolean;
  readonly isSecurityTransparent?: boolean;
  fieldHandle?: RuntimeFieldHandle;
  readonly name?: string;
  declaringType?: Type;
  reflectedType?: Type;
  module?: Module;
  readonly customAttributes?: Array<CustomAttributeData>;
  readonly isCollectible?: boolean;
  readonly metadataToken?: number;
}
