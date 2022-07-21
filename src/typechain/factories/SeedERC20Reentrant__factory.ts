/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SeedERC20Reentrant,
  SeedERC20ReentrantInterface,
} from "../SeedERC20Reentrant";

const _abi = [
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
        internalType: "contract SeedERC20",
        name: "seedERC20Contract_",
        type: "address",
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
    name: "methodTarget",
    outputs: [
      {
        internalType: "enum SeedERC20Reentrant.Method",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "enum SeedERC20Reentrant.Method",
        name: "methodTarget_",
        type: "uint8",
      },
    ],
    name: "setMethodTarget",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a55534420436c617373696360a81b602080830191825283518085019094526005845264555344434360d81b9084015281519192916200006291600391620003e2565b50805162000078906004906020840190620003e2565b505050620000a333600660096200009091906200049e565b6200009d90600a620005b8565b620000a9565b62000620565b6001600160a01b038216620001055760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b6200011360008383620001a0565b80600260008282546200012791906200049e565b90915550506001600160a01b03821660009081526020819052604081208054839290620001569084906200049e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b620001b88383836200037660201b6200069d1760201c565b6001600654600160a01b900460ff166003811115620001db57620001db620005cd565b148015620001f657506006546001600160a01b038381169116145b15620002695760065460405163059a803960e21b815260006004820152600160248201526001600160a01b039091169063166a00e4906044015b600060405180830381600087803b1580156200024b57600080fd5b505af115801562000260573d6000803e3d6000fd5b50505050505050565b6002600654600160a01b900460ff1660038111156200028c576200028c620005cd565b148015620002a757506006546001600160a01b038481169116145b15620002df576006546040516304a4484b60e11b8152600160048201526001600160a01b039091169063094890969060240162000230565b6003600654600160a01b900460ff166003811115620003025762000302620005cd565b1480156200031d57506006546001600160a01b038481169116145b156200037157600654604051637cbc237360e01b815260016004820152600060248201526001600160a01b0390911690637cbc237390604401600060405180830381600087803b1580156200024b57600080fd5b505050565b6200038e8383836200037160201b6200072d1760201c565b6001600160a01b03821660009081526005602052604090205460ff1615620003715760405162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b6044820152606401620000fc565b828054620003f090620005e3565b90600052602060002090601f0160209004810192826200041457600085556200045f565b82601f106200042f57805160ff19168380011785556200045f565b828001600101855582156200045f579182015b828111156200045f57825182559160200191906001019062000442565b506200046d92915062000471565b5090565b5b808211156200046d576000815560010162000472565b634e487b7160e01b600052601160045260246000fd5b60008219821115620004b457620004b462000488565b500190565b600181815b80851115620004fa578160001904821115620004de57620004de62000488565b80851615620004ec57918102915b93841c9390800290620004be565b509250929050565b6000826200051357506001620005b2565b816200052257506000620005b2565b81600181146200053b5760028114620005465762000566565b6001915050620005b2565b60ff8411156200055a576200055a62000488565b50506001821b620005b2565b5060208310610133831016604e8410600b84101617156200058b575081810a620005b2565b620005978383620004b9565b8060001904821115620005ae57620005ae62000488565b0290505b92915050565b6000620005c6838362000502565b9392505050565b634e487b7160e01b600052602160045260246000fd5b600181811c90821680620005f857607f821691505b602082108114156200061a57634e487b7160e01b600052602260045260246000fd5b50919050565b6114f880620006306000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c80635bb9058b116100cd578063902d55a511610081578063a457c2d711610066578063a457c2d714610389578063a9059cbb1461039c578063dd62ed3e146103af57600080fd5b8063902d55a51461037957806395d89b411461038157600080fd5b806379cc6790116100b257806379cc6790146103215780637cc4129a1461033457806385b75f5f1461036657600080fd5b80635bb9058b1461028e57806370a08231146102eb57600080fd5b8063313ce5671161012457806342966c681161010957806342966c681461020157806348422faa1461021657806348ea30da1461023957600080fd5b8063313ce567146101df57806339509351146101ee57600080fd5b806318160ddd1161015557806318160ddd146101b257806323b872dd146101c45780632e0f2625146101d757600080fd5b806306fdde0314610171578063095ea7b31461018f575b600080fd5b6101796103f5565b60405161018691906110db565b60405180910390f35b6101a261019d366004611170565b610487565b6040519015158152602001610186565b6002545b604051908152602001610186565b6101a26101d236600461119c565b6104a1565b6101b6600681565b60405160068152602001610186565b6101a26101fc366004611170565b6104c5565b61021461020f3660046111dd565b610511565b005b6101a26102243660046111f6565b60056020526000908152604090205460ff1681565b6102146102473660046111f6565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61021461029c3660046111f6565b73ffffffffffffffffffffffffffffffffffffffff16600090815260056020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6101b66102f93660046111f6565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61021461032f366004611170565b61051e565b6006546103599074010000000000000000000000000000000000000000900460ff1681565b6040516101869190611249565b61021461037436600461128a565b610537565b6101b6610590565b6101796105aa565b6101a2610397366004611170565b6105b9565b6101a26103aa366004611170565b61068f565b6101b66103bd3660046112ab565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b606060038054610404906112e4565b80601f0160208091040260200160405190810160405280929190818152602001828054610430906112e4565b801561047d5780601f106104525761010080835404028352916020019161047d565b820191906000526020600020905b81548152906001019060200180831161046057829003601f168201915b5050505050905090565b600033610495818585610732565b60019150505b92915050565b6000336104af8582856108e5565b6104ba8585856109bc565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190610495908290869061050c908790611367565b610732565b61051b3382610c7a565b50565b6105298233836108e5565b6105338282610c7a565b5050565b600680548291907fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000008360038111156105885761058861121a565b021790555050565b61059c60066009611367565b6105a790600a61149f565b81565b606060048054610404906112e4565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610682576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6104ba8286868403610732565b6000336104958185856109bc565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604090205460ff161561072d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e00000000000000000000000000000000000000000000000000006044820152606401610679565b505050565b73ffffffffffffffffffffffffffffffffffffffff83166107d4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610679565b73ffffffffffffffffffffffffffffffffffffffff8216610877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610679565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109b657818110156109a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610679565b6109b68484848403610732565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610679565b73ffffffffffffffffffffffffffffffffffffffff8216610b02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610679565b610b0d838383610e73565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610bc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610679565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610c07908490611367565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c6d91815260200190565b60405180910390a36109b6565b73ffffffffffffffffffffffffffffffffffffffff8216610d1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610679565b610d2982600083610e73565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015610ddf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610679565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290610e1b9084906114ab565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610e7e83838361069d565b600160065474010000000000000000000000000000000000000000900460ff166003811115610eaf57610eaf61121a565b148015610ed6575060065473ffffffffffffffffffffffffffffffffffffffff8381169116145b15610f6c576006546040517f166a00e4000000000000000000000000000000000000000000000000000000008152600060048201526001602482015273ffffffffffffffffffffffffffffffffffffffff9091169063166a00e4906044015b600060405180830381600087803b158015610f4f57600080fd5b505af1158015610f63573d6000803e3d6000fd5b50505050505050565b600260065474010000000000000000000000000000000000000000900460ff166003811115610f9d57610f9d61121a565b148015610fc4575060065473ffffffffffffffffffffffffffffffffffffffff8481169116145b15611020576006546040517f094890960000000000000000000000000000000000000000000000000000000081526001600482015273ffffffffffffffffffffffffffffffffffffffff90911690630948909690602401610f35565b600360065474010000000000000000000000000000000000000000900460ff1660038111156110515761105161121a565b148015611078575060065473ffffffffffffffffffffffffffffffffffffffff8481169116145b1561072d576006546040517f7cbc2373000000000000000000000000000000000000000000000000000000008152600160048201526000602482015273ffffffffffffffffffffffffffffffffffffffff90911690637cbc237390604401610f35565b600060208083528351808285015260005b81811015611108578581018301518582016040015282016110ec565b8181111561111a576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461051b57600080fd5b6000806040838503121561118357600080fd5b823561118e8161114e565b946020939093013593505050565b6000806000606084860312156111b157600080fd5b83356111bc8161114e565b925060208401356111cc8161114e565b929592945050506040919091013590565b6000602082840312156111ef57600080fd5b5035919050565b60006020828403121561120857600080fd5b81356112138161114e565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020810160048310611284577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60006020828403121561129c57600080fd5b81356004811061121357600080fd5b600080604083850312156112be57600080fd5b82356112c98161114e565b915060208301356112d98161114e565b809150509250929050565b600181811c908216806112f857607f821691505b60208210811415611332577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561137a5761137a611338565b500190565b600181815b808511156113d857817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156113be576113be611338565b808516156113cb57918102915b93841c9390800290611384565b509250929050565b6000826113ef5750600161049b565b816113fc5750600061049b565b8160018114611412576002811461141c57611438565b600191505061049b565b60ff84111561142d5761142d611338565b50506001821b61049b565b5060208310610133831016604e8410600b841016171561145b575081810a61049b565b611465838361137f565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561149757611497611338565b029392505050565b600061121383836113e0565b6000828210156114bd576114bd611338565b50039056fea264697066735822122018b66244c461fddc5970edee9d67ce08541337ec7681bc353eadf3dd62debfac64736f6c634300080a0033";

type SeedERC20ReentrantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SeedERC20ReentrantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SeedERC20Reentrant__factory extends ContractFactory {
  constructor(...args: SeedERC20ReentrantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SeedERC20Reentrant> {
    return super.deploy(overrides || {}) as Promise<SeedERC20Reentrant>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SeedERC20Reentrant {
    return super.attach(address) as SeedERC20Reentrant;
  }
  connect(signer: Signer): SeedERC20Reentrant__factory {
    return super.connect(signer) as SeedERC20Reentrant__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SeedERC20ReentrantInterface {
    return new utils.Interface(_abi) as SeedERC20ReentrantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SeedERC20Reentrant {
    return new Contract(address, _abi, signerOrProvider) as SeedERC20Reentrant;
  }
}
