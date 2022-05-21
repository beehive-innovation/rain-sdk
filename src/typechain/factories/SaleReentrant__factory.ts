/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SaleReentrant, SaleReentrantInterface } from "../SaleReentrant";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
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
    inputs: [],
    name: "TOTAL_SUPPLY",
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
        name: "account_",
        type: "address",
      },
    ],
    name: "addFreezable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Sale",
        name: "sale_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minimumUnits",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "desiredUnits",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumPrice",
            type: "uint256",
          },
        ],
        internalType: "struct BuyConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "addReentrantTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "freezables",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a55534420436c617373696360a81b602080830191825283518085019094526005845264555344434360d81b9084015281519192916200006291600391620002da565b50805162000078906004906020840190620002da565b505050620000a3336006600962000090919062000396565b6200009d90600a620004b0565b620000a9565b62000502565b6001600160a01b038216620001055760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b6200011360008383620001a0565b806002600082825462000127919062000396565b90915550506001600160a01b038216600090815260208190526040812080548392906200015690849062000396565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b620001b88383836200026e60201b620005da1760201c565b6001600160a01b03821615801590620001de57506006546001600160a01b038381169116145b15620002695760065460405163d48827e960e01b81526007546001600160a01b03908116600483015260085460248301526009546044830152600a546064830152600b5460848301529091169063d48827e99060a401600060405180830381600087803b1580156200024f57600080fd5b505af115801562000264573d6000803e3d6000fd5b505050505b505050565b620002868383836200026960201b6200066a1760201c565b6001600160a01b03821660009081526005602052604090205460ff1615620002695760405162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b6044820152606401620000fc565b828054620002e890620004c5565b90600052602060002090601f0160209004810192826200030c576000855562000357565b82601f106200032757805160ff191683800117855562000357565b8280016001018555821562000357579182015b82811115620003575782518255916020019190600101906200033a565b506200036592915062000369565b5090565b5b808211156200036557600081556001016200036a565b634e487b7160e01b600052601160045260246000fd5b60008219821115620003ac57620003ac62000380565b500190565b600181815b80851115620003f2578160001904821115620003d657620003d662000380565b80851615620003e457918102915b93841c9390800290620003b6565b509250929050565b6000826200040b57506001620004aa565b816200041a57506000620004aa565b81600181146200043357600281146200043e576200045e565b6001915050620004aa565b60ff84111562000452576200045262000380565b50506001821b620004aa565b5060208310610133831016604e8410600b841016171562000483575081810a620004aa565b6200048f8383620003b1565b8060001904821115620004a657620004a662000380565b0290505b92915050565b6000620004be8383620003fa565b9392505050565b600181811c90821680620004da57607f821691505b60208210811415620004fc57634e487b7160e01b600052602260045260246000fd5b50919050565b61130780620005126000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806348422faa116100b2578063902d55a511610081578063a457c2d711610066578063a457c2d7146102cc578063a9059cbb146102df578063dd62ed3e146102f257600080fd5b8063902d55a5146102bc57806395d89b41146102c457600080fd5b806348422faa146101f35780635bb9058b1461021657806370a082311461027357806379cc6790146102a957600080fd5b806323b872dd11610109578063313ce567116100ee578063313ce567146101be57806339509351146101cd57806342966c68146101e057600080fd5b806323b872dd146101a35780632e0f2625146101b657600080fd5b806306fdde031461013b578063095ea7b3146101595780630c3e78c71461017c57806318160ddd14610191575b600080fd5b610143610338565b6040516101509190610ea6565b60405180910390f35b61016c610167366004610f3b565b6103ca565b6040519015158152602001610150565b61018f61018a366004610f67565b6103e4565b005b6002545b604051908152602001610150565b61016c6101b1366004610fc6565b610437565b610195600681565b60405160068152602001610150565b61016c6101db366004610f3b565b61045b565b61018f6101ee366004611007565b6104a7565b61016c610201366004611020565b60056020526000908152604090205460ff1681565b61018f610224366004611020565b73ffffffffffffffffffffffffffffffffffffffff16600090815260056020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b610195610281366004611020565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61018f6102b7366004610f3b565b6104b4565b6101956104cd565b6101436104e7565b61016c6102da366004610f3b565b6104f6565b61016c6102ed366004610f3b565b6105cc565b610195610300366004611044565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546103479061107d565b80601f01602080910402602001604051908101604052809291908181526020018280546103739061107d565b80156103c05780601f10610395576101008083540402835291602001916103c0565b820191906000526020600020905b8154815290600101906020018083116103a357829003601f168201915b5050505050905090565b6000336103d881858561066f565b60019150505b92915050565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617905580600761043182826110d1565b50505050565b600033610445858285610822565b6104508585856108f3565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906103d890829086906104a2908790611176565b61066f565b6104b13382610bb1565b50565b6104bf823383610822565b6104c98282610bb1565b5050565b6104d960066009611176565b6104e490600a6112ae565b81565b6060600480546103479061107d565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156105bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610450828686840361066f565b6000336103d88185856108f3565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604090205460ff161561066a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e000000000000000000000000000000000000000000000000000060448201526064016105b6565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316610711576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105b6565b73ffffffffffffffffffffffffffffffffffffffff82166107b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016105b6565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461043157818110156108e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105b6565b610431848484840361066f565b73ffffffffffffffffffffffffffffffffffffffff8316610996576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105b6565b73ffffffffffffffffffffffffffffffffffffffff8216610a39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016105b6565b610a44838383610daa565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610afa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105b6565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610b3e908490611176565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ba491815260200190565b60405180910390a3610431565b73ffffffffffffffffffffffffffffffffffffffff8216610c54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016105b6565b610c6082600083610daa565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015610d16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016105b6565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290610d529084906112ba565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610db58383836105da565b73ffffffffffffffffffffffffffffffffffffffff821615801590610df4575060065473ffffffffffffffffffffffffffffffffffffffff8381169116145b1561066a576006546040517fd48827e900000000000000000000000000000000000000000000000000000000815260075473ffffffffffffffffffffffffffffffffffffffff908116600483015260085460248301526009546044830152600a546064830152600b5460848301529091169063d48827e99060a401600060405180830381600087803b158015610e8957600080fd5b505af1158015610e9d573d6000803e3d6000fd5b50505050505050565b600060208083528351808285015260005b81811015610ed357858101830151858201604001528201610eb7565b81811115610ee5576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146104b157600080fd5b60008060408385031215610f4e57600080fd5b8235610f5981610f19565b946020939093013593505050565b60008082840360c0811215610f7b57600080fd5b8335610f8681610f19565b925060a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215610fb857600080fd5b506020830190509250929050565b600080600060608486031215610fdb57600080fd5b8335610fe681610f19565b92506020840135610ff681610f19565b929592945050506040919091013590565b60006020828403121561101957600080fd5b5035919050565b60006020828403121561103257600080fd5b813561103d81610f19565b9392505050565b6000806040838503121561105757600080fd5b823561106281610f19565b9150602083013561107281610f19565b809150509250929050565b600181811c9082168061109157607f821691505b602082108114156110cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b81356110dc81610f19565b73ffffffffffffffffffffffffffffffffffffffff81167fffffffffffffffffffffffff000000000000000000000000000000000000000083541617825550602082013560018201556040820135600282015560608201356003820155608082013560048201555050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561118957611189611147565b500190565b600181815b808511156111e757817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156111cd576111cd611147565b808516156111da57918102915b93841c9390800290611193565b509250929050565b6000826111fe575060016103de565b8161120b575060006103de565b8160018114611221576002811461122b57611247565b60019150506103de565b60ff84111561123c5761123c611147565b50506001821b6103de565b5060208310610133831016604e8410600b841016171561126a575081810a6103de565b611274838361118e565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156112a6576112a6611147565b029392505050565b600061103d83836111ef565b6000828210156112cc576112cc611147565b50039056fea2646970667358221220b8076aac98553c4a5d4d00f3e8e86b096d4e91f7f569fc47783369ca7105571964736f6c634300080a0033";

type SaleReentrantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaleReentrantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SaleReentrant__factory extends ContractFactory {
  constructor(...args: SaleReentrantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SaleReentrant> {
    return super.deploy(overrides || {}) as Promise<SaleReentrant>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SaleReentrant {
    return super.attach(address) as SaleReentrant;
  }
  connect(signer: Signer): SaleReentrant__factory {
    return super.connect(signer) as SaleReentrant__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaleReentrantInterface {
    return new utils.Interface(_abi) as SaleReentrantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SaleReentrant {
    return new Contract(address, _abi, signerOrProvider) as SaleReentrant;
  }
}
