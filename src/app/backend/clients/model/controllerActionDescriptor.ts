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
import { AttributeRouteInfo } from './attributeRouteInfo';
import { FilterDescriptor } from './filterDescriptor';
import { IActionConstraintMetadata } from './iActionConstraintMetadata';
import { MethodInfo } from './methodInfo';
import { ParameterDescriptor } from './parameterDescriptor';
import { TypeInfo } from './typeInfo';

export interface ControllerActionDescriptor { 
    controllerName?: string;
    actionName?: string;
    methodInfo?: MethodInfo;
    controllerTypeInfo?: TypeInfo;
    displayName?: string;
    readonly id?: string;
    routeValues?: { [key: string]: string; };
    attributeRouteInfo?: AttributeRouteInfo;
    actionConstraints?: Array<IActionConstraintMetadata>;
    endpointMetadata?: Array<any>;
    parameters?: Array<ParameterDescriptor>;
    boundProperties?: Array<ParameterDescriptor>;
    filterDescriptors?: Array<FilterDescriptor>;
    properties?: { [key: string]: any; };
}