/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCodeSamplesRequest = {
  /**
   * The registry URL from which to retrieve the snippets. E.g. https://spec.speakeasy.com/org/ws/my-source
   */
  registryUrl: string;
  operationIds?: Array<string> | undefined;
  languages?: Array<string> | undefined;
};

/** @internal */
export const GetCodeSamplesRequest$inboundSchema: z.ZodType<
  GetCodeSamplesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  registry_url: z.string(),
  operation_ids: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "registry_url": "registryUrl",
    "operation_ids": "operationIds",
  });
});

/** @internal */
export type GetCodeSamplesRequest$Outbound = {
  registry_url: string;
  operation_ids?: Array<string> | undefined;
  languages?: Array<string> | undefined;
};

/** @internal */
export const GetCodeSamplesRequest$outboundSchema: z.ZodType<
  GetCodeSamplesRequest$Outbound,
  z.ZodTypeDef,
  GetCodeSamplesRequest
> = z.object({
  registryUrl: z.string(),
  operationIds: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    registryUrl: "registry_url",
    operationIds: "operation_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCodeSamplesRequest$ {
  /** @deprecated use `GetCodeSamplesRequest$inboundSchema` instead. */
  export const inboundSchema = GetCodeSamplesRequest$inboundSchema;
  /** @deprecated use `GetCodeSamplesRequest$outboundSchema` instead. */
  export const outboundSchema = GetCodeSamplesRequest$outboundSchema;
  /** @deprecated use `GetCodeSamplesRequest$Outbound` instead. */
  export type Outbound = GetCodeSamplesRequest$Outbound;
}

export function getCodeSamplesRequestToJSON(
  getCodeSamplesRequest: GetCodeSamplesRequest,
): string {
  return JSON.stringify(
    GetCodeSamplesRequest$outboundSchema.parse(getCodeSamplesRequest),
  );
}

export function getCodeSamplesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCodeSamplesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCodeSamplesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCodeSamplesRequest' from JSON`,
  );
}
