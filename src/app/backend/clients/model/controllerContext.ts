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
import { ActionContext } from './actionContext';
import { ControllerActionDescriptor } from './controllerActionDescriptor';
import { HttpContext } from './httpContext';
import { IValueProviderFactory } from './iValueProviderFactory';
import { ModelStateDictionary } from './modelStateDictionary';
import { RouteData } from './routeData';


export interface ControllerContext extends ActionContext { 
    actionDescriptor?: ControllerActionDescriptor;
    valueProviderFactories?: Array<IValueProviderFactory>;
}
