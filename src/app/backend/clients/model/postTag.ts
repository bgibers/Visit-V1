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
import { Post } from './post';
import { Tag } from './tag';

export interface PostTag { 
    postTagId?: number;
    fkPostId?: number;
    fkTagId?: number;
    fkPost?: Post;
    fkTag?: Tag;
}