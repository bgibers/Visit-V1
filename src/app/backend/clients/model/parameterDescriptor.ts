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
import { BindingInfo } from './bindingInfo';
import { Type } from './type';

export interface ParameterDescriptor { 
    name?: string;
    parameterType?: Type;
    bindingInfo?: BindingInfo;
}