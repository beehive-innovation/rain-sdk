import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  TierLevelsERC20,
  TierLevelsERC721,
  deployErc20,
  deployErc721,
  expectAsyncError,
  chainId,
} from './utils';

import {
  AddressBook,
  ITier,
  Verify,
  VerifyTier,
  ERC20BalanceTier,
  ERC20TransferTier,
  ERC721BalanceTier,
  CombineTier,
  GatedNFT,
} from '../src';

describe('SDK - ERC20BalanceTier', () => {
  it('should deploy an ERC20BalanceTier child', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20BalanceTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    expect(
      await ERC20BalanceTier.isChild(signer, tier.address),
      'Address is not a ERC20BalanceTier factory children'
    ).to.be.true;
  });

  it('should get the corrects tier values from SDK', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20BalanceTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    expect(TierLevelsERC20).to.be.deep.equal(await tier.tierValues());
  });

  it('should throw an error if try to call setTier from SDK', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20BalanceTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    await expectAsyncError(
      tier.setTier('', 2, []),
      'SET TIER: NOT IMPLEMENTED'
    );
  });

  it('should calculate the amounts to reach a tier for different addresses and signers using connect', async () => {
    const [deployer, user1, user2] = await ethers.getSigners();
    const token = await deployErc20(deployer);

    // Tier connected to the deployer token and tier contracts
    const tierDeployer = await ERC20BalanceTier.deploy(deployer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    const tierUser1 = tierDeployer.connect(user1);
    const tierUser2 = tierDeployer.connect(user2);

    expect(
      await tierUser1.amountToTier(user1.address, tierUser1.levels.FIVE)
    ).to.be.equals(
      await tierDeployer.amountToTier(user1.address, tierDeployer.levels.FIVE)
    );

    expect(
      await tierUser2.amountToTier(user2.address, tierUser2.levels.TWO)
    ).to.be.equals(
      await tierDeployer.amountToTier(user2.address, tierDeployer.levels.TWO)
    );
  });

  it('should get the current/latest tier as numeric readable expression levels', async () => {
    const [deployer, user] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20BalanceTier.deploy(deployer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });
    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.ZERO);

    // Provide to user tokens to get a tier 3
    const amount = await tier.amountToTier(user.address, tier.levels.FIVE);
    await token.transfer(user.address, amount);

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.FIVE);
  });

  it('should obtain the amount required to level up tiers with the current instance signer', async () => {
    const [signer, user] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20BalanceTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    // user want level four
    const levelFour = tier.levels.FOUR;

    // User start as Tier zero because does not have tokens
    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.ZERO);

    // Sending tokens to user to get Tier four
    await token.transfer(
      user.address,
      await tier.amountToTier(user.address, levelFour)
    );

    expect(await tier.currentTier(user.address)).to.be.equals(levelFour);

    // User receive an arbitrary amount but not enought to get the next tier
    const levelFive = tier.levels.FIVE;
    const halfAmountToFive = (await tier.tierValues())[0].div(2);
    await token.transfer(user.address, halfAmountToFive);

    // User stay same tier four since need the more tokens to Tier five
    expect(await tier.currentTier(user.address)).to.be.equals(levelFour);

    // Sending the other half to get Tier Five
    await token.transfer(
      user.address,
      await tier.amountToTier(user.address, levelFive)
    );
    expect(await tier.currentTier(user.address)).to.be.equals(levelFive);
  });

  it('should obtain the amount that should be remove/burned to downgrade tiers', async () => {
    const [signer, user] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20BalanceTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    // Set as Tier 7 to user with an extra amount
    const initAmount = await tier.amountToTier(user.address, tier.levels.SEVEN);

    await token.transfer(user.address, initAmount);

    expect(await tier.currentTier(user.address)).to.be.equals(
      tier.levels.SEVEN
    );

    // Amount required to downgrade to Tier Two
    const amountToDownGrade = await tier.amountToTier(
      user.address,
      tier.levels.TWO
    );

    // user remove the required amount from his account
    await token.connect(user).transfer(token.address, amountToDownGrade);

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.TWO);
  });

  it('should throw error if the instance does not have the token address when amountToTier is called', async () => {
    const [deployer, user1] = await ethers.getSigners();
    const token = await deployErc20(deployer);

    // Tier derectly deployed contain the token Address
    const tierComplete = await ERC20BalanceTier.deploy(deployer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    // From level 0 to level 5
    const amountFive = (await tierComplete.tierValues())[4];
    expect(
      await tierComplete.amountToTier(user1.address, tierComplete.levels.FIVE)
    ).to.be.equal(amountFive);

    // Create new instance without the token address
    const tierMissingToken = new ERC20BalanceTier(tierComplete.address, user1);

    await expectAsyncError(
      tierMissingToken.amountToTier(
        user1.address,
        tierMissingToken.levels.FIVE
      ),
      'Missing ERC20 Token address in the instance. Please, use addTokenAddress'
    );

    const tierFilled = tierMissingToken.addTokenAddress(token.address);

    // From level 0 to level 5
    expect(
      await tierFilled.amountToTier(user1.address, tierFilled.levels.FIVE)
    ).to.be.equal(amountFive);
  });
});

describe('SDK - ERC20TransferTier', () => {
  it('should deploy an ERC20TransferTier child', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20TransferTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    expect(
      await ERC20TransferTier.isChild(signer, tier.address),
      'Address is not a ERC20TransferTier factory children'
    ).to.be.true;
  });

  it('should get the corrects tier values from SDK', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20TransferTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    expect(TierLevelsERC20).to.be.deep.equal(await tier.tierValues());
  });

  it('should calculate the amounts to reach a tier for different addresses and signers using connect', async () => {
    const [deployer, user1, user2] = await ethers.getSigners();
    const token = await deployErc20(deployer);

    // Tier connected to the deployer token and tier contracts
    const tier = await ERC20TransferTier.deploy(deployer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    const tierUser1 = tier.connect(user1);
    const tierUser2 = tier.connect(user2);

    expect(
      await tierUser1.amountToTier(user1.address, tierUser1.levels.SIX)
    ).to.be.equals(await tier.amountToTier(user1.address, tier.levels.SIX));

    expect(
      await tierUser2.amountToTier(user2.address, tierUser2.levels.FOUR)
    ).to.be.equals(await tier.amountToTier(user2.address, tier.levels.FOUR));
  });

  it('should approve to the ERC20TransferTier contract to use the owner tokens from SDK correctly', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20TransferTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    expect(await token.allowance(signer.address, tier.address)).to.be.equals(0);

    // Using approval from SDK
    const approvedAmount = ethers.BigNumber.from('1000000000');

    await tier.approveTokenForTier(approvedAmount);

    expect(await token.allowance(signer.address, tier.address)).to.be.equals(
      approvedAmount,
      'Wrong amount approved'
    );
  });

  it('should set tier to level up and get the current tier level correclty', async () => {
    const [signer, user] = await ethers.getSigners();
    const token = await deployErc20();
    const tier = await ERC20TransferTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    const tierUser = tier.connect(user);
    const levels = tierUser.levels;

    expect(await tierUser.currentTier(user.address)).to.be.equals(levels.ZERO);

    // User want tier two
    await expect(
      tierUser.setTier(user.address, levels.TWO, []),
      'Wrong set tier success'
    ).to.be.revertedWith('ERC20: insufficient allowance');

    // The amount necessary to user get the tier two
    const approvedAmount = await tierUser.amountToTier(
      user.address,
      levels.TWO
    );

    // Sending to user the tokens
    await token.transfer(user.address, approvedAmount);

    // Approving the contract and set the tier two
    await tierUser.approveTokenForTier(approvedAmount);
    await tierUser.setTier(user.address, levels.TWO, []);

    expect(await tierUser.currentTier(user.address)).to.be.equals(levels.TWO);

    // Now use want tier six
    await expect(
      tierUser.setTier(user.address, levels.SIX, []),
      'Wrong set tier success'
    ).to.be.revertedWith('ERC20: insufficient allowance');

    const approvedAmount_2 = await tierUser.amountToTier(
      user.address,
      levels.SIX
    );

    // Sending to user the tokens
    await token.transfer(user.address, approvedAmount_2);

    // Approving the contract and set the tier SIX
    await tierUser.approveTokenForTier(approvedAmount_2);
    await tierUser.setTier(user.address, levels.SIX, []);

    expect(await tierUser.currentTier(user.address)).to.be.equals(levels.SIX);
  });

  it('should decrease the level tier and get the current tier level correctly', async () => {
    const [deployer, user] = await ethers.getSigners();
    const token = await deployErc20();
    const tierDeployer = await ERC20TransferTier.deploy(deployer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    // Connecting the instance to a new signer
    const tierUser = tierDeployer.connect(user);
    const levels = tierUser.levels;

    // Set as initial level tier seven
    const amountToTierSeven = await tierUser.amountToTier(
      user.address,
      levels.SEVEN
    );
    await token.transfer(user.address, amountToTierSeven);

    await tierUser.approveTokenForTier(amountToTierSeven);
    await tierUser.setTier(user.address, levels.SEVEN, []);

    expect(await tierUser.currentTier(user.address)).to.be.equals(levels.SEVEN);

    // user want to decrease to Tier 4
    const balanceBefore = await token.balanceOf(user.address);
    const amountReturnedExpected = await tierUser.amountToTier(
      user.address,
      levels.FOUR
    );

    await tierUser.setTier(user.address, levels.FOUR, []);

    expect(await tierUser.currentTier(user.address)).to.be.equals(levels.FOUR);
    expect(await token.balanceOf(user.address)).to.be.equals(
      balanceBefore.add(amountReturnedExpected)
    );
  });

  it('should throw error if the instance does not have the token address when amountToTier is called', async () => {
    const [deployer, user1] = await ethers.getSigners();
    const token = await deployErc20(deployer);

    // Tier derectly deployed contain the token Address
    const tierComplete = await ERC20TransferTier.deploy(deployer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    // From level 0 to level 5
    const amountFive = (await tierComplete.tierValues())[4];
    expect(
      await tierComplete.amountToTier(user1.address, tierComplete.levels.FIVE)
    ).to.be.equal(amountFive);

    // Create new instance without the token address
    const tierMissingToken = new ERC20TransferTier(tierComplete.address, user1);

    await expectAsyncError(
      tierMissingToken.amountToTier(
        user1.address,
        tierMissingToken.levels.FIVE
      ),
      'Missing ERC20 Token address in the instance. Please, use addTokenAddress'
    );

    const tierFilled = tierMissingToken.addTokenAddress(token.address);

    // From level 0 to level 5
    expect(
      await tierFilled.amountToTier(user1.address, tierFilled.levels.FIVE)
    ).to.be.equal(amountFive);
  });
});

describe('SDK - ERC721BalanceTier', () => {
  it('should deploy an ERC721BalanceTier child', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc721(signer);

    const tier = await ERC721BalanceTier.deploy(signer, {
      erc721: token.address,
      tierValues: TierLevelsERC721,
    });

    expect(await ERC721BalanceTier.isChild(signer, tier.address)).to.be.true;
  });

  it('should get the corrects tier values from SDK', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc721(signer);

    const tier = await ERC721BalanceTier.deploy(signer, {
      erc721: token.address,
      tierValues: TierLevelsERC721,
    });

    expect(TierLevelsERC721).to.be.deep.equal(await tier.tierValues());
  });

  it('should throw an error if try to call setTier from SDK', async () => {
    const [signer] = await ethers.getSigners();
    const token = await deployErc721(signer);

    const tier = await ERC721BalanceTier.deploy(signer, {
      erc721: token.address,
      tierValues: TierLevelsERC721,
    });

    await expectAsyncError(
      tier.setTier('', 2, []),
      'SET TIER: NOT IMPLEMENTED'
    );
  });

  it('should calculate the amounts to reach a tier for different addresses and signers using connect', async () => {
    const [deployer, user1, user2] = await ethers.getSigners();
    const token = await deployErc721(deployer);

    // Tier connected to the deployer token and tier contracts
    const tier = await ERC721BalanceTier.deploy(deployer, {
      erc721: token.address,
      tierValues: TierLevelsERC721,
    });

    // Connect to differents users
    const tierUser1 = tier.connect(user1);
    const tierUser2 = tier.connect(user2);

    expect(
      await tierUser1.amountToTier(user1.address, tierUser1.levels.FIVE)
    ).to.be.equals(await tier.amountToTier(user1.address, tier.levels.FIVE));

    expect(
      await tierUser2.amountToTier(user2.address, tierUser2.levels.TWO)
    ).to.be.equals(await tier.amountToTier(user2.address, tier.levels.TWO));
  });

  it('should get the current/latest tier as numeric readable expression levels', async () => {
    const [deployer, user] = await ethers.getSigners();
    const token = await deployErc721(deployer);

    const tier = await ERC721BalanceTier.deploy(deployer, {
      erc721: token.address,
      tierValues: TierLevelsERC721, // +1 token in the balance, +1 level tier
    });

    // Increase the user to level tier 4 minting four tokens
    while ((await token.balanceOf(user.address)).lt(4)) {
      await token.connect(user).mintNewToken();
    }

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.FOUR);
  });

  it('should obtain the amount required to level up tiers with the current instance signer', async () => {
    const [signer, user] = await ethers.getSigners();
    const token = await deployErc721(signer);

    const tier = await ERC721BalanceTier.deploy(signer, {
      erc721: token.address,
      tierValues: TierLevelsERC721,
    });

    // user want level four
    const levelFour = tier.levels.FOUR;
    const tierUser = tier.connect(user);

    // User start as Tier zero because does not have tokens
    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.ZERO);
    expect(await tier.amountToTier(user.address, levelFour)).to.be.equals(4);

    // Minting tokens to user to get Tier four
    while (!(await tierUser.amountToTier(user.address, levelFour)).isZero()) {
      await token.connect(user).mintNewToken();
    }

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.FOUR);
    expect(await tier.amountToTier(user.address, levelFour)).to.be.equals(0);
  });

  it('should obtain the amount that should be remove/burned to downgrade tiers', async () => {
    const [signer, user] = await ethers.getSigners();
    const token = await deployErc721(signer);

    const tier = await ERC721BalanceTier.deploy(signer, {
      erc721: token.address,
      tierValues: TierLevelsERC721,
    });

    // Set as Tier 5 to the user. Mint tokens id from 1 to 5
    while ((await token.balanceOf(user.address)).lt(5)) {
      await token.connect(user).mintNewToken();
    }
    const tokenIds = [1, 2, 3, 4, 5];

    for (let i = 0; i < tokenIds.length; i++) {
      expect(await token.ownerOf(tokenIds[i])).to.be.equals(user.address);
    }

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.FIVE);

    // burn until reach the correct balance
    let i = 0;
    while (!(await tier.amountToTier(user.address, tier.levels.TWO)).isZero()) {
      await token.connect(user).burn(tokenIds[i]);
      i++;
    }

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.TWO);
  });

  it('should throw error if the instance does not have the token address when amountToTier is called', async () => {
    const [deployer, user1] = await ethers.getSigners();
    const token = await deployErc721(deployer);

    // Tier derectly deployed contain the token Address
    const tierComplete = await ERC721BalanceTier.deploy(deployer, {
      erc721: token.address,
      tierValues: TierLevelsERC20,
    });

    // From level 0 to level 5
    const amountFive = (await tierComplete.tierValues())[4];
    expect(
      await tierComplete.amountToTier(user1.address, tierComplete.levels.FIVE)
    ).to.be.equal(amountFive);

    // Create new instance without the token address
    const tierMissingToken = new ERC721BalanceTier(tierComplete.address, user1);

    await expectAsyncError(
      tierMissingToken.amountToTier(
        user1.address,
        tierMissingToken.levels.FIVE
      ),
      'Missing ER721 Token address in the instance. Please, use addTokenAddress'
    );

    const tierFilled = tierMissingToken.addTokenAddress(token.address);

    // From level 0 to level 5
    expect(
      await tierFilled.amountToTier(user1.address, tierFilled.levels.FIVE)
    ).to.be.equal(amountFive);
  });
});

describe('SDK - VerifyTier', () => {
  it('should deploy an VerifyTier child', async () => {
    const [deployer, signer] = await ethers.getSigners();

    const verify = await Verify.deploy(deployer, {
      admin: deployer.address,
      callback: ethers.constants.AddressZero,
    });

    const tier = await VerifyTier.deploy(deployer, verify.address);

    expect(await VerifyTier.isChild(signer, tier.address)).to.be.true;
  });

  it('should throw an error if try to call setTier from SDK', async () => {
    const [deployer] = await ethers.getSigners();

    const verify = await Verify.deploy(deployer, {
      admin: deployer.address,
      callback: ethers.constants.AddressZero,
    });

    const tier = await VerifyTier.deploy(deployer, verify.address);

    await expectAsyncError(
      tier.setTier('', 2, []),
      'SET TIER: NOT IMPLEMENTED'
    );
  });

  it('should get correct tier after been approved', async () => {
    const [deployer, admin, user] = await ethers.getSigners();

    const verify = await Verify.deploy(deployer, {
      admin: admin.address,
      callback: ethers.constants.AddressZero,
    });

    // Connect the instance to the admin and grant the approver role to himself
    const verifyAdmin = verify.connect(admin);
    await verifyAdmin.grantRole(await verifyAdmin.APPROVER(), admin.address);

    // Deploy the verifyTier
    const tier = await VerifyTier.deploy(deployer, verify.address);

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.ZERO);

    // Approve the user
    await verifyAdmin.approve([{ account: user.address, data: [] }]);

    expect(await tier.currentTier(user.address)).to.be.equals(
      tier.levels.EIGHT
    );
  });

  it('should get correct tier after been removed', async () => {
    const [deployer, admin, user] = await ethers.getSigners();

    const verify = await Verify.deploy(deployer, {
      admin: admin.address,
      callback: ethers.constants.AddressZero,
    });

    // Connect the instance to the admin and grant the approver role to himself
    const verifyAdmin = verify.connect(admin);
    await verifyAdmin.grantRole(await verifyAdmin.APPROVER(), admin.address);
    await verifyAdmin.grantRole(await verifyAdmin.REMOVER(), admin.address);

    // Deploy the verifyTier
    const tier = await VerifyTier.deploy(deployer, verify.address);

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.ZERO);

    // Approve the user
    await verifyAdmin.approve([{ account: user.address, data: [] }]);

    expect(await tier.currentTier(user.address)).to.be.equals(
      tier.levels.EIGHT
    );

    // Remove the user
    await verifyAdmin.remove([{ account: user.address, data: [] }]);

    expect(await tier.currentTier(user.address)).to.be.equals(tier.levels.ZERO);
  });
});

describe('SDK - CombineTier', () => {
  it('should use always tier correctly', async () => {
    const [deployer, user1, user2, recipient] = await ethers.getSigners();
    (await deployer.provider?.getNetwork())?.chainId;
    // Get the always tier from book
    const alwaysTierAddress = AddressBook.getAddressesForChainId(
      (await deployer.provider?.getNetwork())?.chainId || chainId
    ).alwaysTier;

    const tier = new CombineTier(alwaysTierAddress, deployer);

    // Any address should be allowed in all tiers
    expect(await tier.currentTier(user1.address)).to.be.equals(
      tier.levels.EIGHT
    );
    expect(await tier.currentTier(user2.address)).to.be.equals(
      tier.levels.EIGHT
    );

    // Deploy a GatedNFT with a minimum status as 7 tier
    const gatedConfig = {
      name: 'TestTier',
      symbol: 'TTIER',
      description: 'Testing the tier',
      animationUrl:
        'https://ipfs.io/ipfsbafybeify52a63pgcshhbtkff4nxxxp2zp5yjn2xw43jcy4knwful7ymmgy',
      imageUrl:
        'https://ipfs.io/ipfsbafybeify52a63pgcshhbtkff4nxxxp2zp5yjn2xw43jcy4knwful7ymmgy',
      animationHash:
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      imageHash:
        '0x0000000000000000000000000000000000000000000000000000000000000000',
    };

    const deployArgs = {
      config: gatedConfig,
      tier: tier.address,
      minimumStatus: tier.levels.SEVEN,
      maxPerAddress: 1,
      transferrable: 0,
      maxMintable: 1000,
      royaltyRecipient: recipient.address,
      royaltyBPS: 1,
    };

    const gatedNFT = await GatedNFT.deploy(deployer, deployArgs);

    // Both user should be able to mint
    await gatedNFT.connect(user1).mint(user1.address);

    await gatedNFT.connect(user2).mint(user2.address);

    expect(await gatedNFT.balanceOf(user1.address)).to.be.equals(1);
    expect(await gatedNFT.balanceOf(user2.address)).to.be.equals(1);
  });
});

describe('SDK - ITier', () => {
  it('should get the instance from an already deloyed ITier contract', async () => {
    const [signer, user] = await ethers.getSigners();
    const token = await deployErc20();

    // Deployed a Tier contract
    const balanceTier = await ERC20BalanceTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    // Create the ITier instance
    const iTier = new ITier(balanceTier.address, signer);

    expect(await balanceTier.currentTier(user.address)).to.be.equals(
      await iTier.currentTier(user.address),
      `does not return the same report`
    );

    // Sending tokens to user to get Tier four
    const levelFour = iTier.levels.FOUR;
    await token.transfer(
      user.address,
      await balanceTier.amountToTier(user.address, levelFour)
    );

    expect(await iTier.currentTier(user.address)).to.be.equals(levelFour);
    expect(await balanceTier.currentTier(user.address)).to.be.equals(
      await iTier.currentTier(user.address),
      `does not return the same report`
    );
  });

  it('should setTier correctly if the Tier contract is a ReadWriteTier contract with the SDK ITier interface', async () => {
    const [signer, user] = await ethers.getSigners();
    const token = await deployErc20();
    const transferTier = await ERC20TransferTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    // Create the ITier instance
    const iTier = new ITier(transferTier.address, signer);

    expect(await iTier.currentTier(user.address)).to.be.equals(
      iTier.levels.ZERO
    );

    // User want tier two
    await expect(
      iTier.setTier(user.address, iTier.levels.TWO, []),
      'Wrong set tier success'
    ).to.be.revertedWith('ERC20: insufficient allowance');

    // The amount necessary to user get the tier two
    const approvedAmount = TierLevelsERC20[1];
    await token.approve(iTier.address, approvedAmount);

    await iTier.setTier(user.address, iTier.levels.TWO, []);

    expect(await iTier.currentTier(user.address)).to.be.equals(
      iTier.levels.TWO
    );
  });

  it('should fail setTier correctly if the Tier contract is a ReadOnlyTier contract with the SDK ITier interface', async () => {
    const [signer, user] = await ethers.getSigners();
    const token = await deployErc20();
    const balanceTier = await ERC20BalanceTier.deploy(signer, {
      erc20: token.address,
      tierValues: TierLevelsERC20,
    });

    // Create the ITier instance
    const iTier = new ITier(balanceTier.address, signer);

    expect(await iTier.currentTier(user.address)).to.be.equals(
      iTier.levels.ZERO
    );

    // User want tier two
    await expect(
      iTier.setTier(user.address, iTier.levels.TWO, []),
      'setTier is not available in ReadOnlyTiers'
    ).to.be.revertedWith('SET_TIER');
  });
});
