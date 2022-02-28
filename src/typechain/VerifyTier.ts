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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface VerifyTierInterface extends utils.Interface {
  functions: {
    "initialize(address)": FunctionFragment;
    "report(address)": FunctionFragment;
    "setTier(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "report", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTier",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "report", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTier", data: BytesLike): Result;

  events: {
    "Initialize(address,address)": EventFragment;
    "TierChange(address,address,uint256,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TierChange"): EventFragment;
}

export type InitializeEvent = TypedEvent<
  [string, string],
  { sender: string; verify: string }
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export type TierChangeEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string],
  {
    sender: string;
    account: string;
    startTier: BigNumber;
    endTier: BigNumber;
    data: string;
  }
>;

export type TierChangeEventFilter = TypedEventFilter<TierChangeEvent>;

export interface VerifyTier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifyTierInterface;

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
    initialize(
      verify_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    report(account_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    setTier(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  initialize(
    verify_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  report(account_: string, overrides?: CallOverrides): Promise<BigNumber>;

  setTier(
    arg0: string,
    arg1: BigNumberish,
    arg2: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    initialize(verify_: string, overrides?: CallOverrides): Promise<void>;

    report(account_: string, overrides?: CallOverrides): Promise<BigNumber>;

    setTier(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialize(address,address)"(
      sender?: null,
      verify?: null
    ): InitializeEventFilter;
    Initialize(sender?: null, verify?: null): InitializeEventFilter;

    "TierChange(address,address,uint256,uint256,bytes)"(
      sender?: null,
      account?: null,
      startTier?: null,
      endTier?: null,
      data?: null
    ): TierChangeEventFilter;
    TierChange(
      sender?: null,
      account?: null,
      startTier?: null,
      endTier?: null,
      data?: null
    ): TierChangeEventFilter;
  };

  estimateGas: {
    initialize(
      verify_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    report(account_: string, overrides?: CallOverrides): Promise<BigNumber>;

    setTier(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      verify_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    report(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTier(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}