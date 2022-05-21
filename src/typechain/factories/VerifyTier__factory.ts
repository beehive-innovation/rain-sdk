/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VerifyTier, VerifyTierInterface } from "../VerifyTier";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "verify",
        type: "address",
      },
    ],
    name: "Initialize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "TierChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "verify_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "report",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "setTier",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061074d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638a200fff14610046578063c4d66de81461005b578063e053ea311461006e575b600080fd5b6100596100543660046105b5565b610093565b005b61005961006936600461063c565b6100fa565b61008161007c36600461063c565b610319565b60405190815260200160405180910390f35b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f5345545f5449455200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600054610100900460ff166101155760005460ff1615610119565b303b155b6101a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016100f1565b600054610100900460ff161580156101e457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b73ffffffffffffffffffffffffffffffffffffffff8216610261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f41444452455353000000000000000000000000000000000000000000000060448201526064016100f1565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8516908102919091179091556040805133815260208101929092527fdc90fed0326ba91706deeac7eb34ac9f8b680734f9d782864dc29704d23bed6a910160405180910390a1801561031557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b600080546040517f31e658a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152839262010000900416906331e658a590602401606060405180830381865afa158015610390573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b4919061066b565b600054604080517f42c8a14d000000000000000000000000000000000000000000000000000000008152835163ffffffff90811660048301526020850151811660248301529184015190911660448201524360648201529192506002916201000090910473ffffffffffffffffffffffffffffffffffffffff16906342c8a14d90608401602060405180830381865afa158015610455573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047991906106fe565b14156104be576104b77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60006008846020015163ffffffff166104e6565b9392505050565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92915050565b6000826008811115610554576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100f1565b6000855b858110156105805763ffffffff6020820290811b199890981685891b17979150600101610558565b50959695505050505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146105b057600080fd5b919050565b600080600080606085870312156105cb57600080fd5b6105d48561058c565b935060208501359250604085013567ffffffffffffffff808211156105f857600080fd5b818701915087601f83011261060c57600080fd5b81358181111561061b57600080fd5b88602082850101111561062d57600080fd5b95989497505060200194505050565b60006020828403121561064e57600080fd5b6104b78261058c565b805163ffffffff811681146105b057600080fd5b60006060828403121561067d57600080fd5b6040516060810181811067ffffffffffffffff821117156106c7577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040526106d383610657565b81526106e160208401610657565b60208201526106f260408401610657565b60408201529392505050565b60006020828403121561071057600080fd5b505191905056fea2646970667358221220113bff9ac919f55f19b525dc42e478a9a92d8bc1bea59c6275bcccfcad2756ec64736f6c634300080a0033";

type VerifyTierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyTierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyTier__factory extends ContractFactory {
  constructor(...args: VerifyTierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VerifyTier> {
    return super.deploy(overrides || {}) as Promise<VerifyTier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VerifyTier {
    return super.attach(address) as VerifyTier;
  }
  connect(signer: Signer): VerifyTier__factory {
    return super.connect(signer) as VerifyTier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyTierInterface {
    return new utils.Interface(_abi) as VerifyTierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyTier {
    return new Contract(address, _abi, signerOrProvider) as VerifyTier;
  }
}
