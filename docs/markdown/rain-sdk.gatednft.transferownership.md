<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [rain-sdk](./rain-sdk.md) &gt; [GatedNFT](./rain-sdk.gatednft.md) &gt; [transferOwnership](./rain-sdk.gatednft.transferownership.md)

## GatedNFT.transferOwnership property

Transfers ownership of the contract to a new account (`newOwner`<!-- -->). Can only be called by the current owner.

<b>Signature:</b>

```typescript
readonly transferOwnership: (newOwner: string, overrides?: TxOverrides) => Promise<ContractTransaction>;
```