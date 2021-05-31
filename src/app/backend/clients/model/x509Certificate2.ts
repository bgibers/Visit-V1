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
import { AsymmetricAlgorithm } from "./asymmetricAlgorithm";
import { IntPtr } from "./intPtr";
import { Oid } from "./oid";
import { PublicKey } from "./publicKey";
import { X500DistinguishedName } from "./x500DistinguishedName";

export interface X509Certificate2 {
  archived?: boolean;
  readonly extensions?: Array<any>;
  friendlyName?: string;
  readonly hasPrivateKey?: boolean;
  privateKey?: AsymmetricAlgorithm;
  issuerName?: X500DistinguishedName;
  readonly notAfter?: Date;
  readonly notBefore?: Date;
  publicKey?: PublicKey;
  readonly rawData?: string;
  readonly serialNumber?: string;
  signatureAlgorithm?: Oid;
  subjectName?: X500DistinguishedName;
  readonly thumbprint?: string;
  readonly version?: number;
  handle?: IntPtr;
  readonly issuer?: string;
  readonly subject?: string;
}
