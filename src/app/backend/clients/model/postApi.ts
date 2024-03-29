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
import { Location } from './location';
import { PostType } from './postType';
import { UserResponse } from './userResponse';

export interface PostApi {
  postId?: number;
  fkPostTypeId?: number;
  fkUserId?: string;
  postContentLink?: string;
  postCaption?: string;
  postTime?: Date;
  reviewRating?: number;
  fkPostType?: PostType;
  fkUser?: UserResponse;
  location?: Location;
  likedByCurrentUser?: boolean;
  commentCount?: number;
  likeCount?: number;
}
