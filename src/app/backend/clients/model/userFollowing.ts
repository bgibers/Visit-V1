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
import { User } from './user';


export interface UserFollowing { 
    userFollowingId: number;
    fkMainUserId?: string;
    fkFollowUserId?: string;
    followSince?: Date;
    fkFollowUser?: User;
    fkMainUser?: User;
}
