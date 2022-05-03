<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [rain-sdk](./rain-sdk.md) &gt; [RedeemableERC20](./rain-sdk.redeemableerc20.md) &gt; [grantReceiver](./rain-sdk.redeemableerc20.grantreceiver.md)

## RedeemableERC20.grantReceiver property

Admin can grant an address receiver rights.

Requirements: - Caller have to be the admin

<b>Signature:</b>

```typescript
readonly grantReceiver: (newReceiver: string, overrides?: TxOverrides) => Promise<ContractTransaction>;
```