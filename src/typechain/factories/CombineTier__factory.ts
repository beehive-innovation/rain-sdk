/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CombineTier, CombineTierInterface } from "../CombineTier";

const _abi = [
  {
    inputs: [],
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
  "0x60a06040523480156200001157600080fd5b506002808060066007600b6200002982600462000087565b62000035919062000087565b62000041919062000087565b6200004d919062000087565b62000059919062000087565b62000065919062000087565b62000071919062000087565b6200007e90600562000087565b608052620000ae565b60008219821115620000a957634e487b7160e01b600052601160045260246000fd5b500190565b6080516137b5620000d1600039600081816109cf0152610a0a01526137b56000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638a200fff14610046578063e053ea311461005b578063e684b6d614610080575b600080fd5b610059610054366004612c15565b610093565b005b61006e610069366004612c9e565b6100fa565b60405190815260200160405180910390f35b61005961008e366004612e5a565b610197565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f5345545f5449455200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000805481906101259062010000900473ffffffffffffffffffffffffffffffffffffffff16610305565b6040805173ffffffffffffffffffffffffffffffffffffffff861660208201529192506101649101604051602081830303815290604052826000610359565b6020810151815161017790600190612fdd565b8151811061018757610187612ff4565b6020026020010151915050919050565b600054610100900460ff166101b25760005460ff16156101b6565b303b155b610242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016100f1565b600054610100900460ff1615801561028157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b61029261028d836105dd565b610739565b600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550801561030157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b6103376040518060a0016040528060008152602001606081526020016060815260200160608152602001606081525090565b610340826107a7565b8060200190518101906103539190613166565b92915050565b602082015151825111156103c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f535441434b5f4f564552464c4f5700000000000000000000000000000000000060448201526064016100f1565b602082810151604084015183830201909101516060840151608085015182516000948594859492939092915b848810156105d0576002880197508784015180601e1a975080601f1a965050600587101561054f5760018714156104675781608087166104325750825b607f87168151811061044357600080fd5b8b516020820260200183015160208202602001850152600181018d5250505061055b565b600287141561049e57895180871061047e57600080fd5b6020870260200182015160208202602001830152600181018b525061055b565b60038714156104b7576104b28b8b886107d5565b61055b565b60048714156104e8576104b28a6040516020016104d491906133a4565b60405160208183030381529060405261093b565b866104b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f534b49505f52454d4f564544000000000000000000000000000000000000000060448201526064016100f1565b61055b8b8b89896109cd565b60208a0151518a5111156105cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f535441434b5f4f564552464c4f5700000000000000000000000000000000000060448201526064016100f1565b6103f5565b5050505050505050505050565b61060f6040518060a0016040528060008152602001606081526020016060815260200160608152602001606081525090565b815151610678576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f305f534f5552434553000000000000000000000000000000000000000000000060448201526064016100f1565b6040518060a0016040528060008152602001836040015167ffffffffffffffff8111156106a7576106a7612cbb565b6040519080825280602002602001820160405280156106d0578160200160208202803683370190505b5081526020018360000151815260200183602001518152602001836060015167ffffffffffffffff81111561070757610707612cbb565b604051908082528060200260200182016040528015610730578160200160208202803683370190505b50905292915050565b6000806107648360405160200161075091906133a4565b604051602081830303815290604052610afa565b90507ff95eed63f55d96a35306669cc3b5f652f8d44552e3e4b17b2f78f13571114abd338285604051610799939291906133b7565b60405180910390a192915050565b60606103538260017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610b85565b81517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600583901c918290030183526007821690610100600384811c1681901c91908290039060010160008167ffffffffffffffff81111561083957610839612cbb565b604051908082528060200260200182016040528015610862578160200160208202803683370190505b50905060005b828110156108b9578760200151818960000151018151811061088c5761088c612ff4565b60200260200101518282815181106108a6576108a6612ff4565b6020908102919091010152600101610868565b5060005b6101008110156109305760005b8381101561091d57848286038483815181106108e8576108e8612ff4565b6020026020010151901b901c8960800151828151811061090a5761090a612ff4565b60209081029190910101526001016108ca565b50610929898988610359565b84016108bd565b505050505050505050565b6109ca8160405160240161094f91906133f0565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0be77f5600000000000000000000000000000000000000000000000000000000179052610c6e565b50565b7f0000000000000000000000000000000000000000000000000000000000000000821015610a0857610a03836005840383610c8f565b610af4565b7f00000000000000000000000000000000000000000000000000000000000000008203915060018210610a97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b600084806020019051810190610aad9190613403565b90508073ffffffffffffffffffffffffffffffffffffffff168460200151856000015181518110610ae057610ae0612ff4565b602090810291909101015250825160010183525b50505050565b600080610b2583604051602001610b119190613420565b604051602081830303815290604052610dfa565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff8216610b7f576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b6060833b80610ba4575050604080516020810190915260008152610c67565b80841115610bc2575050604080516020810190915260008152610c67565b83831015610c0d576040517f2c4a89fa0000000000000000000000000000000000000000000000000000000081526004810182905260248101859052604481018490526064016100f1565b8383038482036000828210610c225782610c24565b815b60408051603f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101909152818152955090508087602087018a3c505050505b9392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6004821015610ca857610ca3838383610e26565b505050565b601d821015610d2b57600b821015610cc857610ca3836004840383610f3c565b6016821015610cfe57610ca3837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff584018361126a565b610ca3837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea840183611703565b6023821015610d6157610ca3837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe3840183611973565b6025821015610d9757610ca3837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd840183611e47565b6027821015610dcd57610ca3837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdb840183612070565b610ca3837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd984018361226a565b6060815182604051602001610e10929190613446565b6040516020818303038152906040529050919050565b60048210610e90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b81610ec157438360200151846000015181518110610eb057610eb0612ff4565b602002602001018181525050610f31565b6001821415610ee557428360200151846000015181518110610eb057610eb0612ff4565b6002821415610f0957602083015183518151339291908110610eb057610eb0612ff4565b602083015183518151309291908110610f2457610f24612ff4565b6020026020010181815250505b505080516001019052565b60078210610fa6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b60028210156110f25782517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01826110515783602001518160010181518110610ff157610ff1612ff4565b6020026020010151611029838660200151848151811061101357611013612ff4565b602002602001015161269690919063ffffffff16565b028460200151828151811061104057611040612ff4565b6020026020010181815250506110c6565b60018314156110c6578360200151816001018151811061107357611073612ff4565b6020026020010151611095838660200151848151811061101357611013612ff4565b816110a2576110a26134dd565b04846020015182815181106110b9576110b9612ff4565b6020026020010181815250505b5082517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018352505050565b60058210156112035782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01600283141561116957611142828560200151838151811061101357611013612ff4565b8460200151828151811061115857611158612ff4565b602002602001018181525050610af4565b60038314156111a257611142828560200151838151811061118c5761118c612ff4565b602002602001015161271790919063ffffffff16565b6004831415610af4576111db82856020015183815181106111c5576111c5612ff4565b602002602001015161277590919063ffffffff16565b846020015182815181106111f1576111f1612ff4565b60200260200101818152505050505050565b600582141561124557670de0b6b3a7640000836020015184600001518151811061122f5761122f612ff4565b6020908102919091010152505080516001019052565b6006821415610ca35760128360200151846000015181518110610f2457610f24612ff4565b600b82106112d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b825160208401518051838303927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01918391600091908390811061131a5761131a612ff4565b602002602001015190506000861415611372575b8282101561136d57602087015180516001909301928390811061135357611353612ff4565b602002602001015181611366919061350c565b905061132e565b6116d4565b60018614156113ee575b82821080156113aa57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81105b1561136d5781806001019250506113e7876020015183815181106113d0576113d0612ff4565b6020026020010151826127c090919063ffffffff16565b905061137c565b6002861415611437575b8282101561136d57602087015180516001909301928390811061141d5761141d612ff4565b6020026020010151816114309190612fdd565b90506113f8565b6003861415611494575b82821080156114505750806000105b1561136d57818060010192505061148d8760200151838151811061147657611476612ff4565b6020026020010151826127fc90919063ffffffff16565b9050611441565b60048614156114dd575b8282101561136d5760208701518051600190930192839081106114c3576114c3612ff4565b6020026020010151816114d69190613524565b905061149e565b6005861415611559575b828210801561151557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81105b1561136d5781806001019250506115528760200151838151811061153b5761153b612ff4565b60200260200101518261281290919063ffffffff16565b90506114e7565b60068614156115a2575b8282101561136d57602087015180516001909301928390811061158857611588612ff4565b60200260200101518161159b9190613561565b9050611563565b60078614156115eb575b8282101561136d5760208701518051600190930192839081106115d1576115d1612ff4565b6020026020010151816115e49190613575565b90506115ac565b6008861415611634575b8282101561136d57602087015180516001909301928390811061161a5761161a612ff4565b60200260200101518161162d91906136a9565b90506115f5565b60098614156116865760005b8383101561168057602088015180516001909401938490811061166557611665612ff4565b602002602001015190508181101561167b578091505b611640565b506116d4565b600a8614156116d45760005b838310156116d25760208801518051600190940193849081106116b7576116b7612ff4565b60200260200101519050818111156116cd578091505b611692565b505b80876020015185815181106116eb576116eb612ff4565b60209081029190910101525050506001019092525050565b6007821061176d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b825160208085015181830201018380156117b657600181146117ed5760028114611866576003811461188e57600481146118b657600581146118de57600681146119255761196b565b826117c057600080fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201805115905261196b565b60038310156117fb57600080fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe830186527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0820180518015611857576020820151825261185f565b604082015182525b505061196b565b600283101561187457600080fd5b60018303865260408203602081015181511481525061196b565b600283101561189c57600080fd5b60018303865260408203602081015181511081525061196b565b60028310156118c457600080fd5b60018303865260408203602081015181511181525061196b565b838310156118eb57600080fd5b8315611920576001840383038652602084028203805b8381101561185f578051611918576000825261185f565b602001611901565b61196b565b8383101561193257600080fd5b831561196b576001840383038652602084028203805b83811015611968578051801561195f578252611968565b50602001611948565b50505b505050505050565b600682106119dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b600082611b05575082517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018452602084015180517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe9092019182908110611a4857611a48612ff4565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663e053ea3185602001518360010181518110611a8457611a84612ff4565b60200260200101516040518263ffffffff1660e01b8152600401611ac4919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b602060405180830381865afa158015611ae1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114291906136b5565b6001831415611b60577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8460200151856000015181518110611b4957611b49612ff4565b602090810291909101015283516001018452610af4565b6002831415611b855760008460200151856000015181518110611b4957611b49612ff4565b6003831415611c39575082517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01808452602084015180516000919083908110611bd157611bd1612ff4565b60200260200101519050600085602001518360010181518110611bf657611bf6612ff4565b60200260200101519050611c0a8282612841565b86602001518481518110611c2057611c20612ff4565b6020908102919091010152505083516001018452610af4565b6004831415611d01575082517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0180845260208401518051600f80851692600486901c909116916000919085908110611c9457611c94612ff4565b60200260200101519050600087602001518560010181518110611cb957611cb9612ff4565b60200260200101519050611ccf828585846128a0565b88602001518681518110611ce557611ce5612ff4565b602090810291909101015250508551600101865250610af49050565b6005831415610af4575082517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff601f8316918290030180855290600783901c906003600585901c16908360008267ffffffffffffffff811115611d6657611d66612cbb565b604051908082528060200260200182016040528015611d8f578160200160208202803683370190505b50905060005b83811015611de45789602001518381518110611db357611db3612ff4565b6020026020010151828281518110611dcd57611dcd612ff4565b602090810291909101015260019283019201611d95565b50600089602001518381518110611dfd57611dfd612ff4565b60200260200101519050611e1382828888612946565b8a602001518881518110611e2957611e29612ff4565b60209081029190910101525050875160010188525050505050505050565b60028210611eb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b81611fd75782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018452602084015180517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe9092019182908110611f1957611f19612ff4565b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a082318560200151866000015181518110611f5657611f56612ff4565b60200260200101516040518263ffffffff1660e01b8152600401611f96919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b602060405180830381865afa158015611fb3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111db91906136b5565b6001821415610ca3578251602084015180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201918290811061201e5761201e612ff4565b602002602001015173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fb3573d6000803e3d6000fd5b600282106120da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b82517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe018261217b578360200151818151811061213e5761213e612ff4565b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a082318560200151866000015181518110611a8457611a84612ff4565b6001831415610af4578360200151818151811061219a5761219a612ff4565b602002602001015173ffffffffffffffffffffffffffffffffffffffff16636352211e85602001518660000151815181106121d7576121d7612ff4565b60200260200101516040518263ffffffff1660e01b81526004016121fd91815260200190565b602060405180830381865afa15801561221a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061223e9190613403565b73ffffffffffffffffffffffffffffffffffffffff16846020015182815181106111f1576111f1612ff4565b600282106122d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d41585f4f50434f44450000000000000000000000000000000000000000000060448201526064016100f1565b816123de5782517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe81018452602084015180517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd909201918290811061233c5761233c612ff4565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1662fdd58e8560200151836001018151811061237757612377612ff4565b60200260200101518660200151846002018151811061239857612398612ff4565b60200260200101516040518363ffffffff1660e01b8152600401611f9692919073ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b6001821415610ca3576001810160008167ffffffffffffffff81111561240657612406612cbb565b60405190808252806020026020018201604052801561242f578160200160208202803683370190505b50905060008267ffffffffffffffff81111561244d5761244d612cbb565b604051908082528060200260200182016040528015612476578160200160208202803683370190505b5086518490037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81810189526020890151805193945091869003019160009190839081106124c6576124c6612ff4565b6020026020010151905060005b8581101561257d578860200151818401600101815181106124f6576124f6612ff4565b602002602001015185828151811061251057612510612ff4565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091018201528901518051600185890184010190811061255057612550612ff4565b602002602001015184828151811061256a5761256a612ff4565b60209081029190910101526001016124d3565b506040517f4e1273f400000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff831690634e1273f4906125d590889088906004016136ce565b600060405180830381865afa1580156125f2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052612638919081019061373b565b905060005b8681101561268a5781818151811061265757612657612ff4565b60200260200101518a602001518286018151811061267757612677612ff4565b602090810291909101015260010161263d565b50505050505050505050565b60008082601214156126ab5783915050610353565b82601211156126d7575060128290036126c581600a6136a9565b6126cf9085613524565b915050610353565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161270681600a6136a9565b6126cf9085613561565b5092915050565b600080601283141561272c5783915050610353565b82601211156127465750601282900361270681600a6136a9565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee82016126c581600a6136a9565b600081810b612785575081610353565b60008260000b13156127ad5761279c82600a613770565b6127a69084613524565b9050610353565b60ff60008390031661270681600a6136a9565b60008282018381106127d257806127f4565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b949350505050565b600081831161280c576000610c67565b50900390565b60008261282157506000610353565b82820282848281612834576128346134dd565b0414156127d257806127f4565b60008060015b6008811161289857600061285b8683612a96565b905060006128698684612a96565b9050600061287783836127fc565b9050612887856001860383612b43565b945050600190920191506128479050565b509392505050565b600082600881111561290e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100f1565b6000855b8581101561293a5763ffffffff6020820290811b199890981685891b17979150600101612912565b50959695505050505050565b835160009081908190819060015b60088111612a885760009250828761298d57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612991565b5060005b60005b83811015612a46576129bf8c82815181106129b1576129b1612ff4565b602002602001015184612a96565b95508a8611612a1157886129de576129d78683612bcd565b9150612a08565b60018914156129f1576129d78683612be3565b6002891480156129ff575084155b15612a08578591505b60019450612a3e565b89612a3e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9150612a46565b600101612994565b5083612a6f57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b612a7d866001840383612b43565b955050600101612954565b509298975050505050505050565b6000816008811115612b04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100f1565b82612b125760009150612710565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016020021c63ffffffff1690565b6000826008811115612bb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016100f1565b505060209190910290811b63ffffffff90911b19919091161790565b6000818310612bdc5781610c67565b5090919050565b600081831015612bdc5781610c67565b73ffffffffffffffffffffffffffffffffffffffff811681146109ca57600080fd5b60008060008060608587031215612c2b57600080fd5b8435612c3681612bf3565b935060208501359250604085013567ffffffffffffffff80821115612c5a57600080fd5b818701915087601f830112612c6e57600080fd5b813581811115612c7d57600080fd5b886020828501011115612c8f57600080fd5b95989497505060200194505050565b600060208284031215612cb057600080fd5b8135610c6781612bf3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715612d0d57612d0d612cbb565b60405290565b60405160a0810167ffffffffffffffff81118282101715612d0d57612d0d612cbb565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612d7d57612d7d612cbb565b604052919050565b600067ffffffffffffffff821115612d9f57612d9f612cbb565b5060051b60200190565b600067ffffffffffffffff821115612dc357612dc3612cbb565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112612e0057600080fd5b81356020612e15612e1083612d85565b612d36565b82815260059290921b84018101918181019086841115612e3457600080fd5b8286015b84811015612e4f5780358352918301918301612e38565b509695505050505050565b60006020808385031215612e6d57600080fd5b823567ffffffffffffffff80821115612e8557600080fd5b9084019060808287031215612e9957600080fd5b612ea1612cea565b823582811115612eb057600080fd5b8301601f81018813612ec157600080fd5b8035612ecf612e1082612d85565b81815260059190911b8201860190868101908a831115612eee57600080fd5b8784015b83811015612f6557803587811115612f0a5760008081fd5b8501603f81018d13612f1c5760008081fd5b898101356040612f2e612e1083612da9565b8281528f82848601011115612f435760008081fd5b828285018e83013760009281018d019290925250845250918801918801612ef2565b5084525050508284013582811115612f7c57600080fd5b612f8888828601612def565b858301525060408301356040820152606083013560608201528094505050505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015612fef57612fef612fae565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082601f83011261303457600080fd5b81516020613044612e1083612d85565b82815260059290921b8401810191818101908684111561306357600080fd5b8286015b84811015612e4f5780518352918301918301613067565b60005b83811015613099578181015183820152602001613081565b83811115610af45750506000910152565b600082601f8301126130bb57600080fd5b815160206130cb612e1083612d85565b82815260059290921b840181019181810190868411156130ea57600080fd5b8286015b84811015612e4f57805167ffffffffffffffff81111561310e5760008081fd5b8701603f810189136131205760008081fd5b848101516040613132612e1083612da9565b8281528b828486010111156131475760008081fd5b6131568389830184870161307e565b86525050509183019183016130ee565b60006020828403121561317857600080fd5b815167ffffffffffffffff8082111561319057600080fd5b9083019060a082860312156131a457600080fd5b6131ac612d13565b825181526020830151828111156131c257600080fd5b6131ce87828601613023565b6020830152506040830151828111156131e657600080fd5b6131f2878286016130aa565b60408301525060608301518281111561320a57600080fd5b61321687828601613023565b60608301525060808301518281111561322e57600080fd5b61323a87828601613023565b60808301525095945050505050565b600081518084526020808501945080840160005b838110156132795781518752958201959082019060010161325d565b509495945050505050565b6000815180845261329c81602086016020860161307e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b80518252600060208083015160a0828601526132ed60a0860182613249565b9050604084015185820360408701528181518084528484019150848160051b850101858401935060005b82811015613363577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868303018452613351828651613284565b94870194938701939150600101613317565b506060880151955088810360608a015261337d8187613249565b955050505050506080830151848203608086015261339b8282613249565b95945050505050565b602081526000610c6760208301846132ce565b600073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152506060604083015261339b60608301846132ce565b602081526000610c676020830184613284565b60006020828403121561341557600080fd5b8151610c6781612bf3565b600081526000825161343981600185016020870161307e565b9190910160010192915050565b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f300000000000000000000000000000000000000000000006005820152600082516134cf81600e85016020870161307e565b91909101600e019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000821982111561351f5761351f612fae565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561355c5761355c612fae565b500290565b600082613570576135706134dd565b500490565b600082613584576135846134dd565b500690565b600181815b808511156135e257817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156135c8576135c8612fae565b808516156135d557918102915b93841c939080029061358e565b509250929050565b6000826135f957506001610353565b8161360657506000610353565b816001811461361c576002811461362657613642565b6001915050610353565b60ff84111561363757613637612fae565b50506001821b610353565b5060208310610133831016604e8410600b8410161715613665575081810a610353565b61366f8383613589565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156136a1576136a1612fae565b029392505050565b6000610c6783836135ea565b6000602082840312156136c757600080fd5b5051919050565b604080825283519082018190526000906020906060840190828701845b8281101561371d57815173ffffffffffffffffffffffffffffffffffffffff16845292840192908401906001016136eb565b505050838103828501526137318186613249565b9695505050505050565b60006020828403121561374d57600080fd5b815167ffffffffffffffff81111561376457600080fd5b6127f484828501613023565b6000610c6760ff8416836135ea56fea2646970667358221220b093111fbd37db4e752472d7a9ecb54289ae2466b71641674440c1ecc8ae93fe64736f6c634300080a0033";

type CombineTierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CombineTierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CombineTier__factory extends ContractFactory {
  constructor(...args: CombineTierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CombineTier> {
    return super.deploy(overrides || {}) as Promise<CombineTier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CombineTier {
    return super.attach(address) as CombineTier;
  }
  connect(signer: Signer): CombineTier__factory {
    return super.connect(signer) as CombineTier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CombineTierInterface {
    return new utils.Interface(_abi) as CombineTierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CombineTier {
    return new Contract(address, _abi, signerOrProvider) as CombineTier;
  }
}
