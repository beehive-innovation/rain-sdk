/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ValueTierTestInterface extends utils.Interface {
  functions: {
    "tierValues()": FunctionFragment;
    "wrappedTierToValue(uint256)": FunctionFragment;
    "wrappedValueToTier(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "tierValues",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedTierToValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedValueToTier",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "tierValues", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrappedTierToValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedValueToTier",
    data: BytesLike
  ): Result;

  events: {
    "InitializeValueTier(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InitializeValueTier"): EventFragment;
}

export type InitializeValueTierEvent = TypedEvent<
  [string, string],
  { sender: string; pointer: string }
>;

export type InitializeValueTierEventFilter =
  TypedEventFilter<InitializeValueTierEvent>;

export interface ValueTierTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ValueTierTestInterface;

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
    tierValues(
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { tierValues_: BigNumber[] }>;

    wrappedTierToValue(
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    wrappedValueToTier(
      value_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  tierValues(overrides?: CallOverrides): Promise<BigNumber[]>;

  wrappedTierToValue(
    tier_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrappedValueToTier(
    value_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    tierValues(overrides?: CallOverrides): Promise<BigNumber[]>;

    wrappedTierToValue(
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrappedValueToTier(
      value_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "InitializeValueTier(address,address)"(
      sender?: null,
      pointer?: null
    ): InitializeValueTierEventFilter;
    InitializeValueTier(
      sender?: null,
      pointer?: null
    ): InitializeValueTierEventFilter;
  };

  estimateGas: {
    tierValues(overrides?: CallOverrides): Promise<BigNumber>;

    wrappedTierToValue(
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrappedValueToTier(
      value_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tierValues(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrappedTierToValue(
      tier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wrappedValueToTier(
      value_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}