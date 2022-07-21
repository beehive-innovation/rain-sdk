/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20BalanceTier,
  ERC20BalanceTierInterface,
} from "../ERC20BalanceTier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    name: "InvalidCodeAtRange",
    type: "error",
  },
  {
    inputs: [],
    name: "WriteError",
    type: "error",
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
        name: "erc20",
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
        name: "pointer",
        type: "address",
      },
    ],
    name: "InitializeValueTier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
        components: [
          {
            internalType: "contract IERC20",
            name: "erc20",
            type: "address",
          },
          {
            internalType: "uint256[8]",
            name: "tierValues",
            type: "uint256[8]",
          },
        ],
        internalType: "struct ERC20BalanceTierConfig",
        name: "config_",
        type: "tuple",
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
  {
    inputs: [],
    name: "tierValues",
    outputs: [
      {
        internalType: "uint256[8]",
        name: "tierValues_",
        type: "uint256[8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d48806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806370230b39146100515780638a200fff1461006f578063a61e331514610084578063e053ea3114610097575b600080fd5b6100596100b8565b604051610066919061090d565b60405180910390f35b61008261007d366004610964565b6100fa565b005b610082610092366004610a46565b610161565b6100aa6100a5366004610ae4565b6103e3565b604051908152602001610066565b6100c06108ee565b6000546100e29073ffffffffffffffffffffffffffffffffffffffff16610499565b8060200190518101906100f59190610b01565b905090565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f5345545f5449455200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000547501000000000000000000000000000000000000000000900460ff16158080156101ac575060005460017401000000000000000000000000000000000000000090910460ff16105b806101de5750303b1580156101de575060005474010000000000000000000000000000000000000000900460ff166001145b61026a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610158565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000017905580156102f057600080547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1675010000000000000000000000000000000000000000001790555b6102fd82602001516104c7565b8151600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691821790556040805133815260208101929092527fdc90fed0326ba91706deeac7eb34ac9f8b680734f9d782864dc29704d23bed6a910160405180910390a180156103df57600080547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6000610493600061048e6103f56100b8565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152909116906370a0823190602401602060405180830381865afa158015610465573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104899190610b62565b610660565b6106ae565b92915050565b60606104938260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61074e565b60005473ffffffffffffffffffffffffffffffffffffffff16156104ed576104ed610b7b565b6000805b600881101561059b578183826008811061050d5761050d610baa565b6020020151101561057a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f55545f4f465f4f524445525f544945525f56414c55455300000000000000006044820152606401610158565b82816008811061058c5761058c610baa565b602002015191506001016104f1565b505060006105c7826040516020016105b3919061090d565b604051602081830303815290604052610837565b6040805133815273ffffffffffffffffffffffffffffffffffffffff831660208201529192507f18ebb958e85030233374c8eb79c1a72ee418770db7fb47a7de05d30c868ec958910160405180910390a1600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b6000805b60088110156106a45783816008811061067f5761067f610baa565b6020020151831015610692579050610493565b8061069c81610bd9565b915050610664565b5060089392505050565b600081600881111561071c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610158565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60209190910290811c901b1790565b6060833b8061076d575050604080516020810190915260008152610830565b8084111561078b575050604080516020810190915260008152610830565b838310156107d6576040517f2c4a89fa000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260448101849052606401610158565b83830384820360008282106107eb57826107ed565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050505b9392505050565b6000806108628360405160200161084e9190610c74565b6040516020818303038152906040526108c2565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff82166108bc576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b60608151826040516020016108d8929190610c87565b6040516020818303038152906040529050919050565b6040518061010001604052806008906020820280368337509192915050565b6101008101818360005b6008811015610936578151835260209283019290910190600101610917565b50505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461096157600080fd5b50565b6000806000806060858703121561097a57600080fd5b84356109858161093f565b935060208501359250604085013567ffffffffffffffff808211156109a957600080fd5b818701915087601f8301126109bd57600080fd5b8135818111156109cc57600080fd5b8860208285010111156109de57600080fd5b95989497505060200194505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715610a4057610a406109ed565b60405290565b6000610120808385031215610a5a57600080fd5b6040516040810181811067ffffffffffffffff82111715610a7d57610a7d6109ed565b6040528335610a8b8161093f565b81526020603f85018613610a9e57600080fd5b610aa6610a1c565b928501928087851115610ab857600080fd5b8287015b85811015610ad35780358352918301918301610abc565b509183019190915250949350505050565b600060208284031215610af657600080fd5b81356108308161093f565b6000610100808385031215610b1557600080fd5b83601f840112610b2457600080fd5b610b2c610a1c565b908301908085831115610b3e57600080fd5b845b83811015610b58578051835260209283019201610b40565b5095945050505050565b600060208284031215610b7457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c32577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6000815160005b81811015610c5a5760208185018101518683015201610c40565b81811115610c69576000828601525b509290920192915050565b6000815260006108306001830184610c39565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f3000000000000000000000000000000000000000000000060058201526000610d0a600e830184610c39565b94935050505056fea264697066735822122011660fac102983a01730deff57094d630c0d75277774c12f25b0c60736a4ed8e64736f6c634300080a0033";

type ERC20BalanceTierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20BalanceTierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20BalanceTier__factory extends ContractFactory {
  constructor(...args: ERC20BalanceTierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20BalanceTier> {
    return super.deploy(overrides || {}) as Promise<ERC20BalanceTier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20BalanceTier {
    return super.attach(address) as ERC20BalanceTier;
  }
  connect(signer: Signer): ERC20BalanceTier__factory {
    return super.connect(signer) as ERC20BalanceTier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20BalanceTierInterface {
    return new utils.Interface(_abi) as ERC20BalanceTierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20BalanceTier {
    return new Contract(address, _abi, signerOrProvider) as ERC20BalanceTier;
  }
}
