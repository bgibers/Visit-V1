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
import { CallingConventions } from './callingConventions';
import { CustomAttributeData } from './customAttributeData';
import { MemberTypes } from './memberTypes';
import { MethodAttributes } from './methodAttributes';
import { MethodImplAttributes } from './methodImplAttributes';
import { Module } from './module';
import { RuntimeMethodHandle } from './runtimeMethodHandle';
import { Type } from './type';

export interface ConstructorInfo { 
    memberType?: MemberTypes;
    attributes?: MethodAttributes;
    methodImplementationFlags?: MethodImplAttributes;
    callingConvention?: CallingConventions;
    readonly isAbstract?: boolean;
    readonly isConstructor?: boolean;
    readonly isFinal?: boolean;
    readonly isHideBySig?: boolean;
    readonly isSpecialName?: boolean;
    readonly isStatic?: boolean;
    readonly isVirtual?: boolean;
    readonly isAssembly?: boolean;
    readonly isFamily?: boolean;
    readonly isFamilyAndAssembly?: boolean;
    readonly isFamilyOrAssembly?: boolean;
    readonly isPrivate?: boolean;
    readonly isPublic?: boolean;
    readonly isConstructedGenericMethod?: boolean;
    readonly isGenericMethod?: boolean;
    readonly isGenericMethodDefinition?: boolean;
    readonly containsGenericParameters?: boolean;
    methodHandle?: RuntimeMethodHandle;
    readonly isSecurityCritical?: boolean;
    readonly isSecuritySafeCritical?: boolean;
    readonly isSecurityTransparent?: boolean;
    readonly name?: string;
    declaringType?: Type;
    reflectedType?: Type;
    module?: Module;
    readonly customAttributes?: Array<CustomAttributeData>;
    readonly isCollectible?: boolean;
    readonly metadataToken?: number;
}