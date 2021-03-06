
# Class FactoryContract

All contract factory should use this instead of directly Rain contract to take advantage of specific method to factories

<b>Signature:</b>

```typescript
abstract class FactoryContract extends RainContract 
```

## Static Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [getAddressesForChainId](./addressbook.md#getAddressesForChainId-property-static) | `(chainId: number) => Addresses` | Obtain all the addresses deployed in a specific network with a chain ID.<br></br>*Inherited from [AddressBook.getAddressesForChainId](./addressbook.md#getAddressesForChainId-property-static)* |
|  [getChainId](./raincontract.md#getChainId-property-static) | `(signerOrProvider: Signer \| Provider) => Promise<number>` | Get the chain ID from a valid ethers provider.<br></br>Request to the provider stored in the signer which is the chain ID.<br></br>*Inherited from [RainContract.getChainId](./raincontract.md#getChainId-property-static)* |
|  [getSubgraphEndpoint](./addressbook.md#getSubgraphEndpoint-property-static) | `(chainId: number) => string` | Obtain the latest subgraph endpoint related to the version that use the SDK.<br></br>*Inherited from [AddressBook.getSubgraphEndpoint](./addressbook.md#getSubgraphEndpoint-property-static)* |
|  [nameBookReference](./raincontract.md#nameBookReference-property-static) | `string` | Name reference to find the address of the contract in the book address.<br></br>*Inherited from [RainContract.nameBookReference](./raincontract.md#nameBookReference-property-static)* |

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [address](./raincontract.md#address-property) | `string` | The contract address of the instance.<br></br>*Inherited from [RainContract.address](./raincontract.md#address-property)* |
|  [connect](./raincontract.md#connect-property) | `(signer: Signer) => RainContract` | Connect the current contract instance to a new ethers signer.<br></br>*Inherited from [RainContract.connect](./raincontract.md#connect-property)* |
|  [signer](./raincontract.md#signer-property) | `Signer` | The ethers signer that is connected to the instance.<br></br>*Inherited from [RainContract.signer](./raincontract.md#signer-property)* |

## Static Methods

|  Method | Description |
|  --- | --- |
|  [\_isChild(signer, maybeChild)](./factorycontract.md#_isChild-method-static-1) | Checks if address is registered as a child contract of the factory in the chain. |
|  [getBookAddress(chainId)](./raincontract.md#getBookAddress-method-static-1) | Get the address stored in the book for a determined chain if it is available.<br></br>*Inherited from [RainContract.getBookAddress()](./raincontract.md#getBookAddress-method-static-1)* |
|  [getNewChildFromReceipt(receipt, parentContract)](./factorycontract.md#getNewChildFromReceipt-method-static-1) | Get the child from a receipt obtain from a Factory transaction |

## Methods

|  Method | Description |
|  --- | --- |
|  [checkAddress(address, message)](./raincontract.md#checkAddress-method-1) | Check if an address is correctly formatted and throw an error if it is not an valid address<br></br>*Inherited from [RainContract.checkAddress()](./raincontract.md#checkAddress-method-1)* |

## Static Method Details

<a id="_isChild-method-static-1"></a>

### \_isChild(signer, maybeChild)

Checks if address is registered as a child contract of the factory in the chain.

<b>Signature:</b>

```typescript
protected static _isChild(signer: Signer, maybeChild: string): Promise<boolean>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  signer | `Signer` | An ethers.js Signer |
|  maybeChild | `string` | Address to check registration for. |

<b>Returns:</b>

`Promise<boolean>`

`true` if address was deployed by this contract factory, otherwise `false`

<a id="getNewChildFromReceipt-method-static-1"></a>

### getNewChildFromReceipt(receipt, parentContract)

Get the child from a receipt obtain from a Factory transaction

<b>Signature:</b>

```typescript
static getNewChildFromReceipt(receipt: ContractReceipt, parentContract: Contract | string): string;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  receipt | `ContractReceipt` | The receipt of the transaction |
|  parentContract | `Contract \| string` | Contract factory/parent that create the child. Can be the instance or the address |

<b>Returns:</b>

`string`

The address of the child

