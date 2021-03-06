import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  Addresses,
  chainId,
  deployErc20,
  deployErc721,
  deployErc1155,
  zeroAddress,
} from './utils';

import {
  VM,
  AddressBook,
  Sale,
  Verify,
  GatedNFT,
  VerifyTier,
  CombineTier,
  NoticeBoard,
  EmissionsERC20,
  RedeemableERC20,
  ERC20BalanceTier,
  ERC20TransferTier,
  ERC721BalanceTier,
  RedeemableERC20ClaimEscrow,
  ERC20,
  ERC721,
  ERC1155,
} from '../src';

/**
 * Addresses saved that are in SDK BookAddresses deployed to Hardhat network.
 * **These addresses are deterministically generated with the HH signers.**
 */
export let addresses: Addresses;

before('Initializing and deploying contracts to hardhat network', async () => {
  // ⚠️ Contract Factories instances ⚠️
  const RedeemableERC20FactoryFactory = await ethers.getContractFactory(
    'RedeemableERC20Factory'
  );

  const VerifyFactoryFactory = await ethers.getContractFactory('VerifyFactory');

  const VerifyTierFactoryFactory = await ethers.getContractFactory(
    'VerifyTierFactory'
  );

  const ERC20BalanceTierFactoryFactory = await ethers.getContractFactory(
    'ERC20BalanceTierFactory'
  );

  const ERC20TransferTierFactoryFactory = await ethers.getContractFactory(
    'ERC20TransferTierFactory'
  );

  const CombineTierFactoryFactory = await ethers.getContractFactory(
    'CombineTierFactory'
  );

  const ERC721BalanceTierFactoryFactory = await ethers.getContractFactory(
    'ERC721BalanceTierFactory'
  );

  const GatedNFTFactoryFactory = await ethers.getContractFactory(
    'GatedNFTFactory'
  );

  const RedeemableERC20ClaimEscrowFactory = await ethers.getContractFactory(
    'RedeemableERC20ClaimEscrow'
  );

  const NoticeBoardFactory = await ethers.getContractFactory('NoticeBoard');

  const EmissionsERC20FactoryFactory = await ethers.getContractFactory(
    'EmissionsERC20Factory'
  );

  const SaleFactoryFactory = await ethers.getContractFactory('SaleFactory');

  // ⚠️ Deployments to hardhat test network ⚠️
  const RedeemableERC20Factory = await RedeemableERC20FactoryFactory.deploy();
  const VerifyFactory = await VerifyFactoryFactory.deploy();
  const VerifyTierFactory = await VerifyTierFactoryFactory.deploy();
  const ERC20BalanceTierFactory = await ERC20BalanceTierFactoryFactory.deploy();
  const ERC20TransferTierFactory =
    await ERC20TransferTierFactoryFactory.deploy();
  const CombineTierFactory = await CombineTierFactoryFactory.deploy();
  const ERC721BalanceTierFactory =
    await ERC721BalanceTierFactoryFactory.deploy();
  const GatedNFTFactory = await GatedNFTFactoryFactory.deploy();
  const RedeemableERC20ClaimEscrow =
    await RedeemableERC20ClaimEscrowFactory.deploy();
  const NoticeBoard = await NoticeBoardFactory.deploy();
  const EmissionsERC20Factory = await EmissionsERC20FactoryFactory.deploy();
  const SaleFactory = await SaleFactoryFactory.deploy({
    maximumSaleTimeout: 10000,
    maximumCooldownDuration: 1000,
    redeemableERC20Factory: RedeemableERC20Factory.address,
  });

  // Deploying AlwaysTier
  const sourceAlways = VM.createVMSources([[CombineTier.Opcodes.ALWAYS]]);
  const alwaysArg = {
    sources: sourceAlways,
    constants: [],
    stackLength: 1,
    argumentsLength: 0,
  };

  const tx = await CombineTierFactory.createChildTyped(alwaysArg);
  const AlwaysTier = CombineTier.getNewChildFromReceipt(
    await tx.wait(),
    CombineTierFactory
  );

  // ⚠️ Saving the addresses to our test 😅 ⚠️
  addresses = {
    RedeemableERC20Factory: RedeemableERC20Factory.address,
    VerifyFactory: VerifyFactory.address,
    VerifyTierFactory: VerifyTierFactory.address,
    ERC20BalanceTierFactory: ERC20BalanceTierFactory.address,
    ERC20TransferTierFactory: ERC20TransferTierFactory.address,
    CombineTierFactory: CombineTierFactory.address,
    ERC721BalanceTierFactory: ERC721BalanceTierFactory.address,
    GatedNFTFactory: GatedNFTFactory.address,
    RedeemableERC20ClaimEscrow: RedeemableERC20ClaimEscrow.address,
    NoticeBoard: NoticeBoard.address,
    EmissionsERC20Factory: EmissionsERC20Factory.address,
    SaleFactory: SaleFactory.address,
    AlwaysTier: AlwaysTier,
  };
});

describe('SDK - BookAddress', () => {
  it('should fail if no address stored in the book for a chain', () => {
    const arbitraryId = 1234;
    expect(() => AddressBook.getAddressesForChainId(arbitraryId)).to.throw(
      Error,
      'No deployed contracts for this chain.'
    );
  });

  it('should get the address directly from the book', () => {
    const address = AddressBook.getAddressesForChainId(chainId).noticeBoard;
    expect(address).to.be.equals(addresses.NoticeBoard);
  });

  it('should get the RedeemableERC20Factory address', () => {
    const address = RedeemableERC20.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.RedeemableERC20Factory);
  });

  it('should get the VerifyFactory address', async () => {
    const address = Verify.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.VerifyFactory);
  });

  it('should get the VerifyTierFactory address', async () => {
    const address = VerifyTier.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.VerifyTierFactory);
  });

  it('should get the ERC20BalanceTierFactory address', async () => {
    const address = ERC20BalanceTier.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.ERC20BalanceTierFactory);
  });

  it('should get the ERC20TransferTierFactory address', async () => {
    const address = ERC20TransferTier.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.ERC20TransferTierFactory);
  });

  it('should get the CombineTierFactory address', async () => {
    const address = CombineTier.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.CombineTierFactory);
  });

  it('should get the  ERC721BalanceTierFactory address', async () => {
    const address = ERC721BalanceTier.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.ERC721BalanceTierFactory);
  });

  it('should get the  GatedNFTFactory address', async () => {
    const address = GatedNFT.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.GatedNFTFactory);
  });

  it('should get the  EmissionsERC20Factory address', async () => {
    const address = EmissionsERC20.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.EmissionsERC20Factory);
  });

  it('should get the  SaleFactory address', async () => {
    const address = Sale.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.SaleFactory);
  });

  it('should get the RedeemableERC20ClaimEscrow address', () => {
    const address = RedeemableERC20ClaimEscrow.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.RedeemableERC20ClaimEscrow);
  });

  it('should get the NoticeBoard address', () => {
    const address = NoticeBoard.getBookAddress(chainId);
    expect(address).to.be.equals(addresses.NoticeBoard);
  });

  it('should get the AlwaysTier address', () => {
    const address = AddressBook.getAddressesForChainId(chainId).alwaysTier;
    expect(address).to.be.equals(addresses.AlwaysTier);
  });

  it('should get the correct AlwaysTier instance with SDK', async () => {
    const [signer] = await ethers.getSigners();
    const address = AddressBook.getAddressesForChainId(chainId).alwaysTier;
    expect(address).to.be.equals(addresses.AlwaysTier);

    const AlwaysInstance = await CombineTier.getAlwaysTier(signer);

    expect(await CombineTier.isChild(signer, address)).to.be.true;
    expect(AlwaysInstance.address).to.be.equals(address);
  });

  it('should get the url endpoint stored in the SDK', () => {
    const urlEndpoint = AddressBook.getSubgraphEndpoint(chainId);

    expect(urlEndpoint).to.be.equals('https://api.url-test');
  });
});

describe('SDK - Generics', () => {
  it('should create and use an ERC20 instance correctly', async () => {
    const [deployer, receiver] = await ethers.getSigners();

    // The ERC20 Contract mint all the tokens to the deployer
    const erc20Contract = await deployErc20(deployer);
    const erc20Address = erc20Contract.address;

    // Create the instances
    const erc20Deployer = new ERC20(erc20Address, deployer);
    const erc20Receiver = erc20Deployer.connect(receiver);

    // Transfer tokens from the deployer to the receiver with the instances
    const amountToTransfer = '50000000';
    await erc20Deployer.approve(receiver.address, amountToTransfer);
    await erc20Receiver.transferFrom(
      deployer.address,
      receiver.address,
      amountToTransfer
    );

    expect(await erc20Deployer.balanceOf(receiver.address)).to.be.equals(
      amountToTransfer
    );
  });

  it('should indentify if an address is a valid ERC20', async () => {
    const [deployer, signer] = await ethers.getSigners();

    // Any ERC20
    const erc20Address = (await deployErc20(deployer)).address;

    expect(
      await ERC20.isERC20(erc20Address, signer),
      'WRONG: address is an ERC20'
    ).to.be.true;

    // Any no-erc20 address
    const erc721Address = (await deployErc721(deployer)).address;

    expect(
      await ERC20.isERC20(erc721Address, signer),
      'WRONG:address is not an ERC20'
    ).to.be.false;
    expect(
      await ERC20.isERC20(zeroAddress, signer),
      'WRONG: address is not an ERC20'
    ).to.be.false;
  });

  it('should create and use an ERC721 instance correctly', async () => {
    const [deployer, minter, receiver] = await ethers.getSigners();

    // The ERC721 mint a token (tokenId 0) when is deployed to the deployer address
    const erc721Contract = await deployErc721(deployer);
    const erc721Address = erc721Contract.address;

    // The token work as normally in the chain. Minter address mint a token
    await erc721Contract.connect(minter).mintNewToken();

    // Then use the instances from the SDK to interact with the contract
    const tokenID = 1;
    const erc721Minter = new ERC721(erc721Address, minter);
    const erc721Receiver = erc721Minter.connect(receiver);

    expect(await erc721Minter.ownerOf(tokenID)).to.be.equals(minter.address);

    // Minter set approval so receiver can manage his tokens
    await erc721Minter.setApprovalForAll(receiver.address, true);

    expect(
      await erc721Minter.isApprovedForAll(minter.address, receiver.address)
    ).to.be.true;
    expect(await erc721Receiver.balanceOf(receiver.address)).to.be.equals(0);

    // Receiver transfer the token from minter to his account
    await erc721Receiver.safeTransferFrom(
      minter.address,
      receiver.address,
      tokenID
    );

    expect(await erc721Receiver.balanceOf(receiver.address)).to.be.equals(1);
    expect(await erc721Receiver.ownerOf(tokenID)).to.be.equals(
      receiver.address
    );
  });

  it('should indentify if an address is a valid ERC721', async () => {
    const [deployer, signer] = await ethers.getSigners();

    // Any ERC721
    const erc721Address = (await deployErc721(deployer)).address;

    expect(
      await ERC721.isERC721(erc721Address, signer),
      'WRONG: the address is an ERC721'
    ).to.be.true;

    // any non-ERC721 address
    const erc20Address = (await deployErc20(deployer)).address;

    expect(
      await ERC721.isERC721(erc20Address, signer),
      'WRONG: the address is not an ERC721'
    ).to.be.false;

    expect(
      await ERC721.isERC721(zeroAddress, signer),
      'WRONG: the address is not an ERC721'
    ).to.be.false;
  });

  it('should create and use an ERC115 instance correctly', async () => {
    const [deployer, receiver] = await ethers.getSigners();

    // When this ERC1155 is deployed, mint `1*10**15` token of typeId `0` to the deployer as owner
    const erc1155Contract = await deployErc1155(deployer);
    const erc1155Address = erc1155Contract.address;

    // Create new instance to interact with the contract in chain
    const erc1555Deployer = new ERC1155(erc1155Address, deployer);
    const erc1555Receiver = erc1555Deployer.connect(receiver);

    // Approve to the receiver to use all the balance of the deployer
    await erc1555Deployer.setApprovalForAll(receiver.address, true);

    // Send the 5.000.000 of type 0 from deployer to the receiver
    const tokenType = 0;
    const amount = '5000000';
    await erc1555Receiver.safeTransferFrom(
      deployer.address,
      receiver.address,
      tokenType,
      amount,
      []
    );

    expect(
      await erc1555Receiver.balanceOf(receiver.address, tokenType)
    ).to.be.equals(amount);
  });

  it('should indentify if an address is a valid ERC1155', async () => {
    const [deployer, signer] = await ethers.getSigners();

    // Any ERC1155
    const erc1155Address = (await deployErc1155(deployer)).address;

    expect(
      await ERC1155.isERC1155(erc1155Address, signer),
      'WRONG: the address is an ERC1155'
    ).to.be.true;

    // any non-ERC1155 address
    const erc20Address = (await deployErc20(deployer)).address;

    expect(
      await ERC1155.isERC1155(erc20Address, signer),
      'WRONG: the address is not an ERC1155'
    ).to.be.false;
    expect(
      await ERC1155.isERC1155(zeroAddress, signer),
      'WRONG: the address is not an ERC1155'
    ).to.be.false;
  });
});
