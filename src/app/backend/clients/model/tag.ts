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
import { LocationTag } from './locationTag';
import { PostTag } from './postTag';

export interface Tag { 
    tagId?: number;
    tag1?: string;
    locationTag?: Array<LocationTag>;
    postTag?: Array<PostTag>;
}