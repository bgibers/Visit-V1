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
import { Like } from './like';
import { PostComment } from './postComment';
import { PostTag } from './postTag';
import { PostType } from './postType';
import { PostUserLocation } from './postUserLocation';
import { User } from './user';

export interface Post {
  postId?: number;
  fkPostTypeId?: number;
  fkUserId?: string;
  postContentLink?: string;
  postCaption?: string;
  postTime?: Date;
  reviewRating?: number;
  fkPostType?: PostType;
  fkUser?: User;
  like?: Array<Like>;
  postComment?: Array<PostComment>;
  postTag?: Array<PostTag>;
  postUserLocation?: Array<PostUserLocation>;
}
