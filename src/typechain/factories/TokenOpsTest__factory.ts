/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenOpsTest,
  TokenOpsTestInterface,
  StateConfigStruct,
} from "../TokenOpsTest";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "stackLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "argumentsLength",
            type: "uint256",
          },
        ],
        internalType: "struct StateConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        name: "pointer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "stackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "stack",
            type: "uint256[]",
          },
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "arguments",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct State",
        name: "state",
        type: "tuple",
      },
    ],
    name: "Snapshot",
    type: "event",
  },
  {
    inputs: [],
    name: "run",
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
        name: "length_",
        type: "uint256",
      },
    ],
    name: "runLength",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "runState",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stackIndex",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "stack",
            type: "uint256[]",
          },
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "arguments",
            type: "uint256[]",
          },
        ],
        internalType: "struct State",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200211a3803806200211a833981016040819052620000359162000424565b600560808190526200004a90600290620005a4565b60a08190526200005d90600290620005a4565b60c052620000756200006f8262000088565b620001c2565b6001600160a01b031660e05250620007a7565b620000bb6040518060a0016040528060008152602001606081526020016060815260200160608152602001606081525090565b815151620000fb5760405162461bcd60e51b8152602060048201526009602482015268305f534f555243455360b81b604482015260640160405180910390fd5b6040518060a001604052806000815260200183604001516001600160401b038111156200012c576200012c620002e4565b60405190808252806020026020018201604052801562000156578160200160208202803683370190505b508152602001836000015181526020018360200151815260200183606001516001600160401b038111156200018f576200018f620002e4565b604051908082528060200260200182016040528015620001b9578160200160208202803683370190505b50905292915050565b600080620001fc83604051602001620001dc9190620006e2565b6040516020818303038152906040526200024160201b620002251760201c565b90507ff95eed63f55d96a35306669cc3b5f652f8d44552e3e4b17b2f78f13571114abd3382856040516200023393929190620006fe565b60405180910390a192915050565b6000806200027b836040516020016200025b91906200072c565b604051602081830303815290604052620002b660201b620002b01760201c565b90508051602082016000f091506001600160a01b038216620002b05760405163046a55db60e11b815260040160405180910390fd5b50919050565b6060815182604051602001620002ce92919062000754565b6040516020818303038152906040529050919050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200031f576200031f620002e4565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620003505762000350620002e4565b604052919050565b60006001600160401b03821115620003745762000374620002e4565b5060051b60200190565b60005b838110156200039b57818101518382015260200162000381565b83811115620003ab576000848401525b50505050565b600082601f830112620003c357600080fd5b81516020620003dc620003d68362000358565b62000325565b82815260059290921b84018101918181019086841115620003fc57600080fd5b8286015b8481101562000419578051835291830191830162000400565b509695505050505050565b600060208083850312156200043857600080fd5b82516001600160401b03808211156200045057600080fd5b90840190608082870312156200046557600080fd5b6200046f620002fa565b8251828111156200047f57600080fd5b8301601f810188136200049157600080fd5b8051620004a2620003d68262000358565b81815260059190911b8201860190868101908a831115620004c257600080fd5b8784015b838110156200055857805187811115620004e05760008081fd5b8501603f81018d13620004f35760008081fd5b898101516040898211156200050c576200050c620002e4565b62000520601f8301601f19168d0162000325565b8281528f82848601011115620005365760008081fd5b62000547838e83018487016200037e565b8652505050918801918801620004c6565b50845250505082840151828111156200057057600080fd5b6200057e88828601620003b1565b858301525060408301516040820152606083015160608201528094505050505092915050565b60008219821115620005c657634e487b7160e01b600052601160045260246000fd5b500190565b600081518084526020808501945080840160005b83811015620005fd57815187529582019590820190600101620005df565b509495945050505050565b80518252600060208083015160a0828601526200062960a0860182620005cb565b9050604084015185820360408701528181518084528484019150848160051b850101858401935060005b828110156200069d57601f1980878403018552855180518085526200067e818b87018c85016200037e565b9689019695890195601f01909116929092018701915060010162000653565b506060880151955088810360608a0152620006b98187620005cb565b9550505050505060808301518482036080860152620006d98282620005cb565b95945050505050565b602081526000620006f7602083018462000608565b9392505050565b6001600160a01b03848116825283166020820152606060408201819052600090620006d99083018462000608565b6000815260008251620007478160018501602087016200037e565b9190910160010192915050565b606360f81b815260e083901b6001600160e01b03191660018201526880600e6000396000f360b81b600582015281516000906200079981600e8501602087016200037e565b91909101600e019392505050565b60805160a05160c05160e05161192c620007ee600039600060d301526000818161077801526107d101526000818161071e01526107a40152600061074a015261192c6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806345c6a7a6146100465780635ab47a0114610064578063c040622614610084575b600080fd5b61004e61009a565b60405161005b919061123b565b60405180910390f35b610077610072366004611320565b610119565b60405161005b9190611339565b61008c6101e4565b60405190815260200161005b565b6100cc6040518060a0016040528060008152602001606081526020016060815260200160608152602001606081525090565b60006100f77f00000000000000000000000000000000000000000000000000000000000000006102dc565b905061011460405180602001604052806000815250826000610330565b919050565b6060600061012561009a565b905060008367ffffffffffffffff8111156101425761014261134c565b60405190808252806020026020018201604052801561016b578160200160208202803683370190505b50905060005b848110156101dc5760208301518351829061018d9088906113aa565b61019791906113c1565b815181106101a7576101a76113d9565b60200260200101518282815181106101c1576101c16113d9565b60209081029190910101526101d581611408565b9050610171565b509392505050565b6000806101ef61009a565b905080602001516001826000015161020791906113aa565b81518110610217576102176113d9565b602002602001015191505090565b6000806102508360405160200161023c9190611441565b6040516020818303038152906040526102b0565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff82166102aa576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b60608151826040516020016102c6929190611467565b6040516020818303038152906040529050919050565b61030e6040518060a0016040528060008152602001606081526020016060815260200160608152602001606081525090565b610317826104f6565b80602001905181019061032a9190611707565b92915050565b602082810151604084015183830201909101516060840151608085015182516000948594859492939092915b848810156104e9576002880197508784015180601e1a975080601f1a96505060058710156104dd5760018714156103bf5781608087166103995750825b8a516020607f89160260200182015160208202602001840152600181018c52505061035c565b60028714156103ea5789516020870260200182015160208202602001830152600181018b525061035c565b6003871415610403576103fe8b8b88610524565b61035c565b6004871415610434576103fe8a604051602001610420919061123b565b60405160208183030381529060405261068a565b607f6101fe600188901b1617861660808716156104a0578a517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01808c5260208c01518051909190811061048a5761048a6113d9565b6020026020010151600014156104a0575061035c565b8060000b6000146104d75760008160000b12156104cb57801960020160020260ff16890398506104d7565b8060020260ff16890198505b5061035c565b6103fe8b8b898961071c565b5050505050505050505050565b606061032a8260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6107fe565b81517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600583901c918290030183526007821690610100600384811c1681901c91908290039060010160008167ffffffffffffffff8111156105885761058861134c565b6040519080825280602002602001820160405280156105b1578160200160208202803683370190505b50905060005b8281101561060857876020015181896000015101815181106105db576105db6113d9565b60200260200101518282815181106105f5576105f56113d9565b60209081029190910101526001016105b7565b5060005b61010081101561067f5760005b8381101561066c5784828603848381518110610637576106376113d9565b6020026020010151901b901c89608001518281518110610659576106596113d9565b6020908102919091010152600101610619565b50610678898988610330565b840161060c565b505050505050505050565b6107198160405160240161069e91906117ea565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0be77f56000000000000000000000000000000000000000000000000000000001790526108ec565b50565b7f000000000000000000000000000000000000000000000000000000000000000082101561077657610771837f000000000000000000000000000000000000000000000000000000000000000084038361090d565b6107f8565b7f00000000000000000000000000000000000000000000000000000000000000008210156107cb57610771837f0000000000000000000000000000000000000000000000000000000000000000840383610b46565b6107f8837f0000000000000000000000000000000000000000000000000000000000000000840383610cf5565b50505050565b6060833b8061081d5750506040805160208101909152600081526108e5565b8084111561083b5750506040805160208101909152600081526108e5565b8383101561088b576040517f2c4a89fa0000000000000000000000000000000000000000000000000000000081526004810182905260248101859052604481018490526064015b60405180910390fd5b83830384820360008282106108a057826108a2565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050505b9392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60028210610977576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f4445000000000000000000000000000000000000000000006044820152606401610882565b81610ac95782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184526020840151805190917ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe019081106109dd576109dd6113d9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a082318460200151856000015181518110610a1a57610a1a6113d9565b60200260200101516040518263ffffffff1660e01b8152600401610a5a919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b602060405180830381865afa158015610a77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9b91906117fd565b8360200151600185600001510381518110610ab857610ab86113d9565b602002602001018181525050505050565b6001821415610b41578260200151600184600001510381518110610aef57610aef6113d9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a77573d6000803e3d6000fd5b505050565b60028210610bb0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f4445000000000000000000000000000000000000000000006044820152606401610882565b82517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01835281610bf85782602001516001846000015103815181106109dd576109dd6113d9565b6001821415610b41578260200151600184600001510381518110610c1e57610c1e6113d9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff16636352211e8460200151856000015181518110610c5b57610c5b6113d9565b60200260200101516040518263ffffffff1660e01b8152600401610c8191815260200190565b602060405180830381865afa158015610c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc29190611816565b73ffffffffffffffffffffffffffffffffffffffff168360200151600185600001510381518110610ab857610ab86113d9565b60028210610d5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f4445000000000000000000000000000000000000000000006044820152606401610882565b81610ed25782517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe81018452602084015180517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd9092019182908110610dc757610dc76113d9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1662fdd58e85602001518360010181518110610e0257610e026113d9565b602002602001015186602001518460020181518110610e2357610e236113d9565b60200260200101516040518363ffffffff1660e01b8152600401610e6992919073ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b602060405180830381865afa158015610e86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eaa91906117fd565b84602001518281518110610ec057610ec06113d9565b60200260200101818152505050505050565b6001821415610b41576001810160008167ffffffffffffffff811115610efa57610efa61134c565b604051908082528060200260200182016040528015610f23578160200160208202803683370190505b50905060008267ffffffffffffffff811115610f4157610f4161134c565b604051908082528060200260200182016040528015610f6a578160200160208202803683370190505b5086518490037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8181018952602089015180519394509186900301916000919083908110610fba57610fba6113d9565b6020026020010151905060005b8581101561107157886020015181840160010181518110610fea57610fea6113d9565b6020026020010151858281518110611004576110046113d9565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910182015289015180516001858901840101908110611044576110446113d9565b602002602001015184828151811061105e5761105e6113d9565b6020908102919091010152600101610fc7565b506040517f4e1273f400000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff831690634e1273f4906110c9908890889060040161184c565b600060405180830381865afa1580156110e6573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261112c91908101906118b9565b905060005b8681101561117e5781818151811061114b5761114b6113d9565b60200260200101518a602001518286018151811061116b5761116b6113d9565b6020908102919091010152600101611131565b50505050505050505050565b600081518084526020808501945080840160005b838110156111ba5781518752958201959082019060010161119e565b509495945050505050565b60005b838110156111e05781810151838201526020016111c8565b838111156107f85750506000910152565b600081518084526112098160208601602086016111c5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060208083528351818401528084015160a0604085015261126060c085018261118a565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0808684030160608701528282518085528585019150858160051b860101868501945060005b828110156112d957848783030184526112c78287516111f1565b958801959388019391506001016112ad565b5060608a01519650838982030160808a01526112f5818861118a565b965050505060808701519250808685030160a08701525050611317828261118a565b95945050505050565b60006020828403121561133257600080fd5b5035919050565b6020815260006108e5602083018461118a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156113bc576113bc61137b565b500390565b600082198211156113d4576113d461137b565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561143a5761143a61137b565b5060010190565b600081526000825161145a8160018501602087016111c5565b9190910160010192915050565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f300000000000000000000000000000000000000000000006005820152600082516114f081600e8501602087016111c5565b91909101600e019392505050565b60405160a0810167ffffffffffffffff811182821017156115215761152161134c565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561156e5761156e61134c565b604052919050565b600067ffffffffffffffff8211156115905761159061134c565b5060051b60200190565b600082601f8301126115ab57600080fd5b815160206115c06115bb83611576565b611527565b82815260059290921b840181019181810190868411156115df57600080fd5b8286015b848110156115fa57805183529183019183016115e3565b509695505050505050565b6000601f838184011261161757600080fd5b825160206116276115bb83611576565b82815260059290921b8501810191818101908784111561164657600080fd5b8287015b848110156116fb57805167ffffffffffffffff8082111561166b5760008081fd5b818a0191508a603f8301126116805760008081fd5b858201516040828211156116965761169661134c565b6116c5887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08c85011601611527565b92508183528c818386010111156116dc5760008081fd5b6116eb828985018387016111c5565b505084525091830191830161164a565b50979650505050505050565b60006020828403121561171957600080fd5b815167ffffffffffffffff8082111561173157600080fd5b9083019060a0828603121561174557600080fd5b61174d6114fe565b8251815260208301518281111561176357600080fd5b61176f8782860161159a565b60208301525060408301518281111561178757600080fd5b61179387828601611605565b6040830152506060830151828111156117ab57600080fd5b6117b78782860161159a565b6060830152506080830151828111156117cf57600080fd5b6117db8782860161159a565b60808301525095945050505050565b6020815260006108e560208301846111f1565b60006020828403121561180f57600080fd5b5051919050565b60006020828403121561182857600080fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146108e557600080fd5b604080825283519082018190526000906020906060840190828701845b8281101561189b57815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101611869565b505050838103828501526118af818661118a565b9695505050505050565b6000602082840312156118cb57600080fd5b815167ffffffffffffffff8111156118e257600080fd5b6118ee8482850161159a565b94935050505056fea264697066735822122097e8cd436dd34ec388b6d2fec44e584028ec6721a0847dd89f0ff9e2960d0b6264736f6c634300080a0033";

type TokenOpsTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenOpsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenOpsTest__factory extends ContractFactory {
  constructor(...args: TokenOpsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    config_: StateConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenOpsTest> {
    return super.deploy(config_, overrides || {}) as Promise<TokenOpsTest>;
  }
  getDeployTransaction(
    config_: StateConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(config_, overrides || {});
  }
  attach(address: string): TokenOpsTest {
    return super.attach(address) as TokenOpsTest;
  }
  connect(signer: Signer): TokenOpsTest__factory {
    return super.connect(signer) as TokenOpsTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenOpsTestInterface {
    return new utils.Interface(_abi) as TokenOpsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenOpsTest {
    return new Contract(address, _abi, signerOrProvider) as TokenOpsTest;
  }
}