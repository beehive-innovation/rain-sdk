
# Class VM

Class related to hold the some of the common patterns around the Rain VM that are required to interact with it.

The class is intented to contain general methods that can be used in a lot of scenarios and ways.

<b>Signature:</b>

```typescript
class VM 
```

## Static Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [Opcodes](./vm.md#Opcodes-property-static) | `typeof AllStandardOps` | All the standard Op Codes |

## Static Methods

|  Method | Description |
|  --- | --- |
|  [combiner(config1, config2, options)](./vm.md#combiner-method-static-1) | Combines 2 individual VM scripts |
|  [createVMSources(OPerands)](./vm.md#createVMSources-method-static-1) | Create a VM sources to be ready to use in any call just providing the combination desired. |
|  [toOwnerMaker(config, ownerAddress, options)](./vm.md#toOwnerMaker-method-static-1) | Make an address the owner of a VM Script - checks the sender address against the owner address and if it passes the final result will be determined by the main VM script and if it fails it will be 0 by default. |
|  [toTierDiscounter(config, tierAddress, tierDiscount, options)](./vm.md#toTierDiscounter-method-static-1) | Deducts percentage off of the result of a VM script based on the holding tier of a tier contract. |
|  [toTierMultiplier(config, tierAddress, tierMultiplier, options)](./vm.md#toTierMultiplier-method-static-1) | Multiply the result of a VM script based on the holding tier of a tier contract. |
|  [toTimeSlicer(configs, times, inBlockNumber)](./vm.md#toTimeSlicer-method-static-1) | A method to merge multiple (more than 1) scripts to be executed based on time slices. |

## Static Property Details

<a id="Opcodes-property-static"></a>

### Opcodes

All the standard Op Codes

<b>Signature:</b>

```typescript
static Opcodes: typeof AllStandardOps;
```

## Static Method Details

<a id="combiner-method-static-1"></a>

### combiner(config1, config2, options)

Combines 2 individual VM scripts

- please be aware if your script has DUP opcode, as DUP is relative to script and cannot be handled by this method and needs to be dealt with manualy before calling this method.

<b>Signature:</b>

```typescript
static combiner(config1: StateConfig, config2: StateConfig, options?: {
        index?: number;
        numberOfSources?: number;
        position?: number[];
    }): StateConfig;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  config1 | [StateConfig](../interfaces/stateconfig.md) | the first VM script that will be combined. (default sits at top) |
|  config2 | [StateConfig](../interfaces/stateconfig.md) | the second VM script that will be combined. (default sits at bottom) |
|  options | <pre>{&#010;    index?: number;&#010;    numberOfSources?: number;&#010;    position?: number[];&#010;}</pre> | used for additional configuraions: - (param) index - to identify which sources item in config1.sources the combination starts at, if not specified, it will be 0. - (param) numberOfSource - for specifying how many sources item to combine. - (param) position - An array representing the positions of config1 script where config2 sources will be merged at; position, array length must be equal to 'numberOfSources' or else it will be ignored. |

<b>Returns:</b>

`StateConfig`

combined VM script.

<a id="createVMSources-method-static-1"></a>

### createVMSources(OPerands)

Create a VM sources to be ready to use in any call just providing the combination desired.

<b>Signature:</b>

```typescript
static createVMSources(OPerands: (OPerand | Uint8Array)[]): [Uint8Array];
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  OPerands | `(OPerand \| Uint8Array)[]` | All the configuration with the opcodes and operands. If any combination does not have an operand with an opcode, a 0 (zero) will be use with the opcode as the operand. Please |

<b>Returns:</b>

`[Uint8Array]`

A source

<a id="toOwnerMaker-method-static-1"></a>

### toOwnerMaker(config, ownerAddress, options)

Make an address the owner of a VM Script - checks the sender address against the owner address and if it passes the final result will be determined by the main VM script and if it fails it will be 0 by default.

- please be aware if your script has DUP opcode, as DUP is relative to script and cannot be handled by this method and needs to be dealt with manualy before calling this method.

<b>Signature:</b>

```typescript
static toOwnerMaker(config: StateConfig, ownerAddress: string, options?: {
        index?: number;
        position?: number[];
        notOwnerVar?: StateConfig | number;
    }): StateConfig;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  config | [StateConfig](../interfaces/stateconfig.md) | the main VM script |
|  ownerAddress | `string` | the address that is going to be the owner of the main VM script. |
|  options | <pre>{&#010;    index?: number;&#010;    position?: number[];&#010;    notOwnerVar?: StateConfig \| number;&#010;}</pre> | used for additional configuraions: - (param) index - to identify which sources item in config.sources the combination starts at, if not specified, it will be 0. - (param) position - An array representing the positions of config script where notOwnerVar sources (if exists) will be merged at; position, array length must be equal to 'numberOfSources' or else it will be ignored. - (param) notOwnerVar - the value or the script that will be executed if the owner check fails, if not specified 0 will be applied. |

<b>Returns:</b>

`StateConfig`

a VM script.

<a id="toTierDiscounter-method-static-1"></a>

### toTierDiscounter(config, tierAddress, tierDiscount, options)

Deducts percentage off of the result of a VM script based on the holding tier of a tier contract.

<b>Signature:</b>

```typescript
static toTierDiscounter(config: StateConfig, tierAddress: string, tierDiscount: number[], options?: {
        index?: number;
        tierActivation?: (string | number)[];
    }): StateConfig;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  config | [StateConfig](../interfaces/stateconfig.md) | the main VM script |
|  tierAddress | `string` | the contract address of the tier contract. |
|  tierDiscount | `number[]` | an array of 8 items - the discount value (range 0 - 99) of each tier are the 8 items of the array. |
|  options | <pre>{&#010;    index?: number;&#010;    tierActivation?: (string \| number)[];&#010;}</pre> | used for additional configuraions: - (param) index to identify which sources item in config.sources the tierMultiplier applies to, if not specified, it will be 0. - (param) tierActivation An array of numbers, representing the amount of blocks each tier must hold in order to get the discount, e.g. the first item in array is 100 mean tier 1 needs to be held at least 100 blocks to get the discount. |

<b>Returns:</b>

`StateConfig`

a VM script

<a id="toTierMultiplier-method-static-1"></a>

### toTierMultiplier(config, tierAddress, tierMultiplier, options)

Multiply the result of a VM script based on the holding tier of a tier contract.

<b>Signature:</b>

```typescript
static toTierMultiplier(config: StateConfig, tierAddress: string, tierMultiplier: number[], options?: {
        index?: number;
        tierActivation?: (string | number)[];
    }): StateConfig;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  config | [StateConfig](../interfaces/stateconfig.md) | the main VM script |
|  tierAddress | `string` | the contract address of the tier contract. |
|  tierMultiplier | `number[]` | an array of 8 items - the multiplier value (2 decimals max) of each tier are the 8 items of the array. |
|  options | <pre>{&#010;    index?: number;&#010;    tierActivation?: (string \| number)[];&#010;}</pre> | used for additional configuraions: - (param) index to identify which sources item in config.sources the tierMultiplier applies to, if not specified, it will be 0. - (param) tierActivation An array of numbers, representing the amount of blocks each tier must hold in order to get the multiplier, e.g. the first item in array is 100 mean tier 1 needs to be held at least 100 blocks to get the multiplier. |

<b>Returns:</b>

`StateConfig`

a VM script

<a id="toTimeSlicer-method-static-1"></a>

### toTimeSlicer(configs, times, inBlockNumber)

A method to merge multiple (more than 1) scripts to be executed based on time slices.

<b>Signature:</b>

```typescript
static toTimeSlicer(configs: StateConfig[], times: number[], inBlockNumber?: boolean): StateConfig;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  configs | `StateConfig[]` | An array of StateConfigs that will be merged and executed at runtime in order by time slices |
|  times | `number[]` | An array of numbers representing either BLOCK\_NUMBER or TIMESTAMP that time slices will be between each of the 2 items in the array its length should be number of configs - 1. |
|  inBlockNumber | `boolean` | (optional) false by default which means the time slices will be based on TIMESTAMP, pass true to base it on BLOCK\_NUMBER |

<b>Returns:</b>

`StateConfig`

a VM script

