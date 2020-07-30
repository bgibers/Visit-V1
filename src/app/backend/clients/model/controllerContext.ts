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
import { ActionDescriptor } from './actionDescriptor';
import { HttpContext } from './httpContext';
import { IValueProviderFactory } from './iValueProviderFactory';
import { ModelStateEntry } from './modelStateEntry';
import { RouteData } from './routeData';

export interface ControllerContext { 
    actionDescriptor?: ActionDescriptor;
    valueProviderFactories?: Array<IValueProviderFactory>;
    httpContext?: HttpContext;
    readonly modelState?: { [key: string]: ModelStateEntry; };
    routeData?: RouteData;
}