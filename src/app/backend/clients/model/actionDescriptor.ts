/**
 * My Title
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AttributeRouteInfo } from './attributeRouteInfo';
import { FilterDescriptor } from './filterDescriptor';
import { IActionConstraintMetadata } from './iActionConstraintMetadata';
import { ParameterDescriptor } from './parameterDescriptor';


export interface ActionDescriptor { 
    id?: string;
    routeValues?: { [key: string]: string; };
    attributeRouteInfo?: AttributeRouteInfo;
    actionConstraints?: Array<IActionConstraintMetadata>;
    endpointMetadata?: Array<any>;
    parameters?: Array<ParameterDescriptor>;
    boundProperties?: Array<ParameterDescriptor>;
    filterDescriptors?: Array<FilterDescriptor>;
    displayName?: string;
    properties?: { [key: string]: any; };
}
