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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SmartPoolManagerInterface extends utils.Interface {
  functions: {
    "exitPool(IConfigurableRightsPool,IBPool,uint256,uint256[])": FunctionFragment;
    "exitswapExternAmountOut(IConfigurableRightsPool,IBPool,address,uint256,uint256)": FunctionFragment;
    "exitswapPoolAmountIn(IConfigurableRightsPool,IBPool,address,uint256,uint256)": FunctionFragment;
    "joinPool(IConfigurableRightsPool,IBPool,uint256,uint256[])": FunctionFragment;
    "joinswapExternAmountIn(IConfigurableRightsPool,IBPool,address,uint256,uint256)": FunctionFragment;
    "joinswapPoolAmountOut(IConfigurableRightsPool,IBPool,address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exitPool",
    values: [string, string, BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "exitswapExternAmountOut",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exitswapPoolAmountIn",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "joinPool",
    values: [string, string, BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "joinswapExternAmountIn",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "joinswapPoolAmountOut",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exitswapExternAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exitswapPoolAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "joinswapExternAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "joinswapPoolAmountOut",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SmartPoolManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SmartPoolManagerInterface;

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
    exitPool(
      self: string,
      bPool: string,
      poolAmountIn: BigNumberish,
      minAmountsOut: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber[]] & {
        exitFee: BigNumber;
        pAiAfterExitFee: BigNumber;
        actualAmountsOut: BigNumber[];
      }
    >;

    exitswapExternAmountOut(
      self: string,
      bPool: string,
      tokenOut: string,
      tokenAmountOut: BigNumberish,
      maxPoolAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { exitFee: BigNumber; poolAmountIn: BigNumber }
    >;

    exitswapPoolAmountIn(
      self: string,
      bPool: string,
      tokenOut: string,
      poolAmountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { exitFee: BigNumber; tokenAmountOut: BigNumber }
    >;

    joinPool(
      self: string,
      bPool: string,
      poolAmountOut: BigNumberish,
      maxAmountsIn: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { actualAmountsIn: BigNumber[] }>;

    joinswapExternAmountIn(
      self: string,
      bPool: string,
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      minPoolAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { poolAmountOut: BigNumber }>;

    joinswapPoolAmountOut(
      self: string,
      bPool: string,
      tokenIn: string,
      poolAmountOut: BigNumberish,
      maxAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { tokenAmountIn: BigNumber }>;
  };

  exitPool(
    self: string,
    bPool: string,
    poolAmountIn: BigNumberish,
    minAmountsOut: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber[]] & {
      exitFee: BigNumber;
      pAiAfterExitFee: BigNumber;
      actualAmountsOut: BigNumber[];
    }
  >;

  exitswapExternAmountOut(
    self: string,
    bPool: string,
    tokenOut: string,
    tokenAmountOut: BigNumberish,
    maxPoolAmountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { exitFee: BigNumber; poolAmountIn: BigNumber }
  >;

  exitswapPoolAmountIn(
    self: string,
    bPool: string,
    tokenOut: string,
    poolAmountIn: BigNumberish,
    minAmountOut: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { exitFee: BigNumber; tokenAmountOut: BigNumber }
  >;

  joinPool(
    self: string,
    bPool: string,
    poolAmountOut: BigNumberish,
    maxAmountsIn: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  joinswapExternAmountIn(
    self: string,
    bPool: string,
    tokenIn: string,
    tokenAmountIn: BigNumberish,
    minPoolAmountOut: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  joinswapPoolAmountOut(
    self: string,
    bPool: string,
    tokenIn: string,
    poolAmountOut: BigNumberish,
    maxAmountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    exitPool(
      self: string,
      bPool: string,
      poolAmountIn: BigNumberish,
      minAmountsOut: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber[]] & {
        exitFee: BigNumber;
        pAiAfterExitFee: BigNumber;
        actualAmountsOut: BigNumber[];
      }
    >;

    exitswapExternAmountOut(
      self: string,
      bPool: string,
      tokenOut: string,
      tokenAmountOut: BigNumberish,
      maxPoolAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { exitFee: BigNumber; poolAmountIn: BigNumber }
    >;

    exitswapPoolAmountIn(
      self: string,
      bPool: string,
      tokenOut: string,
      poolAmountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { exitFee: BigNumber; tokenAmountOut: BigNumber }
    >;

    joinPool(
      self: string,
      bPool: string,
      poolAmountOut: BigNumberish,
      maxAmountsIn: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    joinswapExternAmountIn(
      self: string,
      bPool: string,
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      minPoolAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinswapPoolAmountOut(
      self: string,
      bPool: string,
      tokenIn: string,
      poolAmountOut: BigNumberish,
      maxAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    exitPool(
      self: string,
      bPool: string,
      poolAmountIn: BigNumberish,
      minAmountsOut: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exitswapExternAmountOut(
      self: string,
      bPool: string,
      tokenOut: string,
      tokenAmountOut: BigNumberish,
      maxPoolAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exitswapPoolAmountIn(
      self: string,
      bPool: string,
      tokenOut: string,
      poolAmountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinPool(
      self: string,
      bPool: string,
      poolAmountOut: BigNumberish,
      maxAmountsIn: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinswapExternAmountIn(
      self: string,
      bPool: string,
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      minPoolAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinswapPoolAmountOut(
      self: string,
      bPool: string,
      tokenIn: string,
      poolAmountOut: BigNumberish,
      maxAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exitPool(
      self: string,
      bPool: string,
      poolAmountIn: BigNumberish,
      minAmountsOut: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exitswapExternAmountOut(
      self: string,
      bPool: string,
      tokenOut: string,
      tokenAmountOut: BigNumberish,
      maxPoolAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exitswapPoolAmountIn(
      self: string,
      bPool: string,
      tokenOut: string,
      poolAmountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinPool(
      self: string,
      bPool: string,
      poolAmountOut: BigNumberish,
      maxAmountsIn: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinswapExternAmountIn(
      self: string,
      bPool: string,
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      minPoolAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinswapPoolAmountOut(
      self: string,
      bPool: string,
      tokenIn: string,
      poolAmountOut: BigNumberish,
      maxAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
