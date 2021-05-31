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
import { Assembly } from "./assembly";
import { CustomAttributeData } from "./customAttributeData";
import { ModuleHandle } from "./moduleHandle";

export interface Module {
  assembly?: Assembly;
  readonly fullyQualifiedName?: string;
  readonly name?: string;
  readonly mdStreamVersion?: number;
  readonly moduleVersionId?: string;
  readonly scopeName?: string;
  moduleHandle?: ModuleHandle;
  readonly customAttributes?: Array<CustomAttributeData>;
  readonly metadataToken?: number;
}
