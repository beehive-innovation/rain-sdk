/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SaleEscrowWrapper,
  SaleEscrowWrapperInterface,
} from "../SaleEscrowWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
    ],
    name: "fetchEscrowStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
    ],
    name: "fetchReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
    ],
    name: "fetchToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
    ],
    name: "getEscrowStatus",
    outputs: [
      {
        internalType: "enum EscrowStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
    ],
    name: "getReserve",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
    ],
    name: "getToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061077e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806394eda7de1161005057806394eda7de14610102578063bc926d0014610115578063c9a396e91461015b57600080fd5b8063074f28071461007757806334672acc1461008c578063597704381461009f575b600080fd5b61008a610085366004610676565b610194565b005b61008a61009a366004610676565b6101a1565b6100d86100ad366004610676565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600160205260409020541690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61008a610110366004610676565b6101aa565b61014e610123366004610676565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205460ff1690565b6040516100f991906106c9565b6100d8610169366004610676565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152602081905260409020541690565b61019d816101b3565b5050565b61019d81610333565b61019d816104d7565b73ffffffffffffffffffffffffffffffffffffffff8082166000908152602081905260408120549091168061032d5760008373ffffffffffffffffffffffffffffffffffffffff1663cd3293de6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561022f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610253919061070a565b905073ffffffffffffffffffffffffffffffffffffffff81166102d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f52455345525645000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff848116600090815260208190526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691831691909117905590505b92915050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604081205460ff168181600281111561036f5761036f61069a565b111561037b5792915050565b60008373ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ec9190610727565b905060028160038111156104025761040261069a565b141561045d5750505073ffffffffffffffffffffffffffffffffffffffff16600090815260026020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168217905590565b60038160038111156104715761047161069a565b14156104cd5750505073ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915590565b5060009392505050565b73ffffffffffffffffffffffffffffffffffffffff8082166000908152600160205260408120549091168061032d5760008373ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610553573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610577919061070a565b905073ffffffffffffffffffffffffffffffffffffffff81166105f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f305f544f4b454e0000000000000000000000000000000000000000000000000060448201526064016102ce565b73ffffffffffffffffffffffffffffffffffffffff938416600090815260016020526040902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016948216949094179093555090919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461067357600080fd5b50565b60006020828403121561068857600080fd5b813561069381610651565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020810160038310610704577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60006020828403121561071c57600080fd5b815161069381610651565b60006020828403121561073957600080fd5b81516004811061069357600080fdfea26469706673582212208d1ac659060defa663cb55242479996b377dc48a88e85b5954d25b08019a44d764736f6c634300080a0033";

type SaleEscrowWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaleEscrowWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SaleEscrowWrapper__factory extends ContractFactory {
  constructor(...args: SaleEscrowWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SaleEscrowWrapper> {
    return super.deploy(overrides || {}) as Promise<SaleEscrowWrapper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SaleEscrowWrapper {
    return super.attach(address) as SaleEscrowWrapper;
  }
  connect(signer: Signer): SaleEscrowWrapper__factory {
    return super.connect(signer) as SaleEscrowWrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaleEscrowWrapperInterface {
    return new utils.Interface(_abi) as SaleEscrowWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SaleEscrowWrapper {
    return new Contract(address, _abi, signerOrProvider) as SaleEscrowWrapper;
  }
}
