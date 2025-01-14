# GetCodeSamplesRequest

## Example Usage

```typescript
import { GetCodeSamplesRequest } from "@speakeasyapi/code-samples/models/operations";

let value: GetCodeSamplesRequest = {
  registryUrl: "https://spec.speakeasy.com/org/ws/my-source",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `registryUrl`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The registry URL from which to retrieve the snippets. E.g. https://spec.speakeasy.com/org/ws/my-source | https://spec.speakeasy.com/org/ws/my-source                                                            |
| `operationIds`                                                                                         | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `languages`                                                                                            | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |