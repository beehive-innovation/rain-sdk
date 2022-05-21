/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20BalanceTierFactory,
  ERC20BalanceTierFactoryInterface,
} from "../ERC20BalanceTierFactory";

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
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Implementation",
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
        name: "child",
        type: "address",
      },
    ],
    name: "NewChild",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "createChild",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
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
    name: "createChildTyped",
    outputs: [
      {
        internalType: "contract ERC20BalanceTier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
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
        name: "maybeChild_",
        type: "address",
      },
    ],
    name: "isChild",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506001600090815560405161002490610096565b604051809103906000f080158015610040573d6000803e3d6000fd5b50604080513381526001600160a01b03831660208201529192507f7fac34ecf0b1b374cd9659e3d17db602659d53f1162b1f20142e6c02694aed70910160405180910390a16001600160a01b03166080526100a3565b610ce3806108f783390190565b6080516108336100c4600039600081816093015261037a01526108336000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632ea72a49146100515780635c60da1b1461008e578063ab43ea1f146100b5578063fc91a897146100c8575b600080fd5b61006461005f366004610510565b610111565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100647f000000000000000000000000000000000000000000000000000000000000000081565b6100646100c3366004610582565b6102bf565b6101016100d63660046105c0565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b6040519015158152602001610085565b600060026000541415610185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556101968484610362565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205490915060ff1615610229576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4455504c49434154455f4348494c440000000000000000000000000000000000604482015260640161017c565b73ffffffffffffffffffffffffffffffffffffffff811660008181526001602081815260409283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169092179091558151338152908101929092527f7da70c4e5387d7038610b79ca7d304caaef815826e51e67cf247135387a79bce910160405180910390a160016000559392505050565b60003073ffffffffffffffffffffffffffffffffffffffff16632ea72a49836040516020016102ee91906105e4565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016103199190610622565b6020604051808303816000875af1158015610338573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035c9190610695565b92915050565b6000806103718385018561070b565b9050600061039e7f000000000000000000000000000000000000000000000000000000000000000061042e565b6040517fa61e331500000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063a61e3315906103f39085906004016107a9565b600060405180830381600087803b15801561040d57600080fd5b505af1158015610421573d6000803e3d6000fd5b5092979650505050505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f091505073ffffffffffffffffffffffffffffffffffffffff811661050b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640161017c565b919050565b6000806020838503121561052357600080fd5b823567ffffffffffffffff8082111561053b57600080fd5b818501915085601f83011261054f57600080fd5b81358181111561055e57600080fd5b86602082850101111561057057600080fd5b60209290920196919550909350505050565b6000610120828403121561059557600080fd5b50919050565b73ffffffffffffffffffffffffffffffffffffffff811681146105bd57600080fd5b50565b6000602082840312156105d257600080fd5b81356105dd8161059b565b9392505050565b610120810182356105f48161059b565b73ffffffffffffffffffffffffffffffffffffffff1682526101006020848101908401376000815292915050565b600060208083528351808285015260005b8181101561064f57858101830151858201604001528201610633565b81811115610661576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000602082840312156106a757600080fd5b81516105dd8161059b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715610705576107056106b2565b60405290565b600061012080838503121561071f57600080fd5b6040516040810181811067ffffffffffffffff82111715610742576107426106b2565b60405283356107508161059b565b81526020603f8501861361076357600080fd5b61076b6106e1565b92850192808785111561077d57600080fd5b8287015b858110156107985780358352918301918301610781565b509183019190915250949350505050565b815173ffffffffffffffffffffffffffffffffffffffff1681526020808301516101208301919081840160005b60088110156107f3578251825291830191908301906001016107d6565b505050509291505056fea2646970667358221220ec9932e0ecdaefa26435066b684dd87432016db14e264acb8c303de31d4ae06464736f6c634300080a0033608060405234801561001057600080fd5b50610cc3806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806370230b39146100515780638a200fff1461006f578063a61e331514610084578063e053ea3114610097575b600080fd5b6100596100b8565b6040516100669190610888565b60405180910390f35b61008261007d3660046108df565b6100fa565b005b6100826100923660046109c1565b610161565b6100aa6100a5366004610a5f565b61035e565b604051908152602001610066565b6100c0610869565b6000546100e29073ffffffffffffffffffffffffffffffffffffffff16610414565b8060200190518101906100f59190610a7c565b905090565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f5345545f5449455200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000547501000000000000000000000000000000000000000000900460ff166101a85760005474010000000000000000000000000000000000000000900460ff16156101ac565b303b155b610238576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610158565b6000547501000000000000000000000000000000000000000000900460ff1615801561029f57600080547fffffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffffff1675010100000000000000000000000000000000000000001790555b6102ac8260200151610442565b8151600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691821790556040805133815260208101929092527fdc90fed0326ba91706deeac7eb34ac9f8b680734f9d782864dc29704d23bed6a910160405180910390a1801561035a57600080547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1690555b5050565b600061040e60006104096103706100b8565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152909116906370a0823190602401602060405180830381865afa1580156103e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104049190610add565b6105db565b610629565b92915050565b606061040e8260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6106c9565b60005473ffffffffffffffffffffffffffffffffffffffff161561046857610468610af6565b6000805b6008811015610516578183826008811061048857610488610b25565b602002015110156104f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f55545f4f465f4f524445525f544945525f56414c55455300000000000000006044820152606401610158565b82816008811061050757610507610b25565b6020020151915060010161046c565b505060006105428260405160200161052e9190610888565b6040516020818303038152906040526107b2565b6040805133815273ffffffffffffffffffffffffffffffffffffffff831660208201529192507f18ebb958e85030233374c8eb79c1a72ee418770db7fb47a7de05d30c868ec958910160405180910390a1600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b6000805b600881101561061f578381600881106105fa576105fa610b25565b602002015183101561060d57905061040e565b8061061781610b54565b9150506105df565b5060089392505050565b6000816008811115610697576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610158565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60209190910290811c901b1790565b6060833b806106e85750506040805160208101909152600081526107ab565b808411156107065750506040805160208101909152600081526107ab565b83831015610751576040517f2c4a89fa000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260448101849052606401610158565b83830384820360008282106107665782610768565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050505b9392505050565b6000806107dd836040516020016107c99190610bef565b60405160208183030381529060405261083d565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff8216610837576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b6060815182604051602001610853929190610c02565b6040516020818303038152906040529050919050565b6040518061010001604052806008906020820280368337509192915050565b6101008101818360005b60088110156108b1578151835260209283019290910190600101610892565b50505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146108dc57600080fd5b50565b600080600080606085870312156108f557600080fd5b8435610900816108ba565b935060208501359250604085013567ffffffffffffffff8082111561092457600080fd5b818701915087601f83011261093857600080fd5b81358181111561094757600080fd5b88602082850101111561095957600080fd5b95989497505060200194505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff811182821017156109bb576109bb610968565b60405290565b60006101208083850312156109d557600080fd5b6040516040810181811067ffffffffffffffff821117156109f8576109f8610968565b6040528335610a06816108ba565b81526020603f85018613610a1957600080fd5b610a21610997565b928501928087851115610a3357600080fd5b8287015b85811015610a4e5780358352918301918301610a37565b509183019190915250949350505050565b600060208284031215610a7157600080fd5b81356107ab816108ba565b6000610100808385031215610a9057600080fd5b83601f840112610a9f57600080fd5b610aa7610997565b908301908085831115610ab957600080fd5b845b83811015610ad3578051835260209283019201610abb565b5095945050505050565b600060208284031215610aef57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610bad577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6000815160005b81811015610bd55760208185018101518683015201610bbb565b81811115610be4576000828601525b509290920192915050565b6000815260006107ab6001830184610bb4565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f3000000000000000000000000000000000000000000000060058201526000610c85600e830184610bb4565b94935050505056fea2646970667358221220357d760f9dd4cc0e0a228e340d951502a72616fefae3f7afd98c93ffdb1c439464736f6c634300080a0033";

type ERC20BalanceTierFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20BalanceTierFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20BalanceTierFactory__factory extends ContractFactory {
  constructor(...args: ERC20BalanceTierFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20BalanceTierFactory> {
    return super.deploy(overrides || {}) as Promise<ERC20BalanceTierFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20BalanceTierFactory {
    return super.attach(address) as ERC20BalanceTierFactory;
  }
  connect(signer: Signer): ERC20BalanceTierFactory__factory {
    return super.connect(signer) as ERC20BalanceTierFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20BalanceTierFactoryInterface {
    return new utils.Interface(_abi) as ERC20BalanceTierFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20BalanceTierFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20BalanceTierFactory;
  }
}
