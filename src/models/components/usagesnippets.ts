/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UsageSnippet,
  UsageSnippet$inboundSchema,
  UsageSnippet$Outbound,
  UsageSnippet$outboundSchema,
} from "./usagesnippet.js";

export type UsageSnippets = {
  snippets: Array<UsageSnippet>;
};

/** @internal */
export const UsageSnippets$inboundSchema: z.ZodType<
  UsageSnippets,
  z.ZodTypeDef,
  unknown
> = z.object({
  snippets: z.array(UsageSnippet$inboundSchema),
});

/** @internal */
export type UsageSnippets$Outbound = {
  snippets: Array<UsageSnippet$Outbound>;
};

/** @internal */
export const UsageSnippets$outboundSchema: z.ZodType<
  UsageSnippets$Outbound,
  z.ZodTypeDef,
  UsageSnippets
> = z.object({
  snippets: z.array(UsageSnippet$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsageSnippets$ {
  /** @deprecated use `UsageSnippets$inboundSchema` instead. */
  export const inboundSchema = UsageSnippets$inboundSchema;
  /** @deprecated use `UsageSnippets$outboundSchema` instead. */
  export const outboundSchema = UsageSnippets$outboundSchema;
  /** @deprecated use `UsageSnippets$Outbound` instead. */
  export type Outbound = UsageSnippets$Outbound;
}

export function usageSnippetsToJSON(usageSnippets: UsageSnippets): string {
  return JSON.stringify(UsageSnippets$outboundSchema.parse(usageSnippets));
}

export function usageSnippetsFromJSON(
  jsonString: string,
): SafeParseResult<UsageSnippets, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UsageSnippets$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UsageSnippets' from JSON`,
  );
}
