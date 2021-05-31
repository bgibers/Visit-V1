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
import { KeySizes } from './keySizes';

export interface AsymmetricAlgorithm {
  keySize?: number;
  readonly legalKeySizes?: Array<KeySizes>;
  readonly signatureAlgorithm?: string;
  readonly keyExchangeAlgorithm?: string;
}
