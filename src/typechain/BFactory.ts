/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BFactoryInterface extends utils.Interface {
  functions: {
    "collect(address)": FunctionFragment;
    "getBLabs()": FunctionFragment;
    "getColor()": FunctionFragment;
    "isBPool(address)": FunctionFragment;
    "newBPool()": FunctionFragment;
    "setBLabs(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "collect", values: [string]): string;
  encodeFunctionData(functionFragment: "getBLabs", values?: undefined): string;
  encodeFunctionData(functionFragment: "getColor", values?: undefined): string;
  encodeFunctionData(functionFragment: "isBPool", values: [string]): string;
  encodeFunctionData(functionFragment: "newBPool", values?: undefined): string;
  encodeFunctionData(functionFragment: "setBLabs", values: [string]): string;

  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBLabs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getColor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isBPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newBPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBLabs", data: BytesLike): Result;

  events: {
    "LOG_BLABS(address,address)": EventFragment;
    "LOG_NEW_POOL(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LOG_BLABS"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LOG_NEW_POOL"): EventFragment;
}

export type LOG_BLABSEvent = TypedEvent<
  [string, string],
  { caller: string; blabs: string }
>;

export type LOG_BLABSEventFilter = TypedEventFilter<LOG_BLABSEvent>;

export type LOG_NEW_POOLEvent = TypedEvent<
  [string, string],
  { caller: string; pool: string }
>;

export type LOG_NEW_POOLEventFilter = TypedEventFilter<LOG_NEW_POOLEvent>;

export interface BFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BFactoryInterface;

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
    collect(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBLabs(overrides?: CallOverrides): Promise<[string]>;

    getColor(overrides?: CallOverrides): Promise<[string]>;

    isBPool(b: string, overrides?: CallOverrides): Promise<[boolean]>;

    newBPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBLabs(
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  collect(
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBLabs(overrides?: CallOverrides): Promise<string>;

  getColor(overrides?: CallOverrides): Promise<string>;

  isBPool(b: string, overrides?: CallOverrides): Promise<boolean>;

  newBPool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBLabs(
    b: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    collect(pool: string, overrides?: CallOverrides): Promise<void>;

    getBLabs(overrides?: CallOverrides): Promise<string>;

    getColor(overrides?: CallOverrides): Promise<string>;

    isBPool(b: string, overrides?: CallOverrides): Promise<boolean>;

    newBPool(overrides?: CallOverrides): Promise<string>;

    setBLabs(b: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "LOG_BLABS(address,address)"(
      caller?: string | null,
      blabs?: string | null
    ): LOG_BLABSEventFilter;
    LOG_BLABS(
      caller?: string | null,
      blabs?: string | null
    ): LOG_BLABSEventFilter;

    "LOG_NEW_POOL(address,address)"(
      caller?: string | null,
      pool?: string | null
    ): LOG_NEW_POOLEventFilter;
    LOG_NEW_POOL(
      caller?: string | null,
      pool?: string | null
    ): LOG_NEW_POOLEventFilter;
  };

  estimateGas: {
    collect(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBLabs(overrides?: CallOverrides): Promise<BigNumber>;

    getColor(overrides?: CallOverrides): Promise<BigNumber>;

    isBPool(b: string, overrides?: CallOverrides): Promise<BigNumber>;

    newBPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBLabs(
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collect(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBLabs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getColor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isBPool(
      b: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newBPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBLabs(
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
