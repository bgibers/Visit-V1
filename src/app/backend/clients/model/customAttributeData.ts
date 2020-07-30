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
import { ConstructorInfo } from './constructorInfo';
import { CustomAttributeNamedArgument } from './customAttributeNamedArgument';
import { CustomAttributeTypedArgument } from './customAttributeTypedArgument';
import { Type } from './type';

export interface CustomAttributeData { 
    attributeType?: Type;
    constructor?: ConstructorInfo;
    readonly constructorArguments?: Array<CustomAttributeTypedArgument>;
    readonly namedArguments?: Array<CustomAttributeNamedArgument>;
}