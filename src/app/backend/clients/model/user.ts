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
import { Like } from "./like";
import { Location } from "./location";
import { Post } from "./post";
import { PostComment } from "./postComment";
import { UserFollowing } from "./userFollowing";
import { UserLocation } from "./userLocation";
import { UserMessage } from "./userMessage";

export interface User {
  firstname?: string;
  lastname?: string;
  birthday?: Date;
  title?: string;
  education?: string;
  birthLocation?: string;
  residenceLocation?: string;
  avi?: string;
  fkBirthLocationId?: number;
  fkResidenceLocationId?: number;
  facebookId?: number;
  fkBirthLocation?: Location;
  fkResidenceLocation?: Location;
  like?: Array<Like>;
  post?: Array<Post>;
  postComment?: Array<PostComment>;
  userFollowingFkFollowUser?: Array<UserFollowing>;
  userFollowingFkMainUser?: Array<UserFollowing>;
  userLocation?: Array<UserLocation>;
  userMessageFkRecieverUser?: Array<UserMessage>;
  userMessageFkSenderUser?: Array<UserMessage>;
  id?: string;
  userName?: string;
  normalizedUserName?: string;
  email?: string;
  normalizedEmail?: string;
  emailConfirmed?: boolean;
  passwordHash?: string;
  securityStamp?: string;
  concurrencyStamp?: string;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  lockoutEnd?: Date;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
}
