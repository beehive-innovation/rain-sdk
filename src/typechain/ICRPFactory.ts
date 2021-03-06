/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type PoolParamsStruct = {
  poolTokenSymbol: string;
  poolTokenName: string;
  constituentTokens: string[];
  tokenBalances: BigNumberish[];
  tokenWeights: BigNumberish[];
  swapFee: BigNumberish;
};

export type PoolParamsStructOutput = [
  string,
  string,
  string[],
  BigNumber[],
  BigNumber[],
  BigNumber
] & {
  poolTokenSymbol: string;
  poolTokenName: string;
  constituentTokens: string[];
  tokenBalances: BigNumber[];
  tokenWeights: BigNumber[];
  swapFee: BigNumber;
};

export type RightsStruct = {
  canPauseSwapping: boolean;
  canChangeSwapFee: boolean;
  canChangeWeights: boolean;
  canAddRemoveTokens: boolean;
  canWhitelistLPs: boolean;
  canChangeCap: boolean;
};

export type RightsStructOutput = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean
] & {
  canPauseSwapping: boolean;
  canChangeSwapFee: boolean;
  canChangeWeights: boolean;
  canAddRemoveTokens: boolean;
  canWhitelistLPs: boolean;
  canChangeCap: boolean;
};

export interface ICRPFactoryInterface extends utils.Interface {
  functions: {
    "newCrp(address,(string,string,address[],uint256[],uint256[],uint256),(bool,bool,bool,bool,bool,bool))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "newCrp",
    values: [string, PoolParamsStruct, RightsStruct]
  ): string;

  decodeFunctionResult(functionFragment: "newCrp", data: BytesLike): Result;

  events: {};
}

export interface ICRPFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICRPFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    newCrp(
      factoryAddress: string,
      poolParams: PoolParamsStruct,
      rights: RightsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  newCrp(
    factoryAddress: string,
    poolParams: PoolParamsStruct,
    rights: RightsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    newCrp(
      factoryAddress: string,
      poolParams: PoolParamsStruct,
      rights: RightsStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    newCrp(
      factoryAddress: string,
      poolParams: PoolParamsStruct,
      rights: RightsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    newCrp(
      factoryAddress: string,
      poolParams: PoolParamsStruct,
      rights: RightsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
