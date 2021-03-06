import { Signer, BigNumberish, BigNumber, BytesLike } from 'ethers';
import { TierContract } from '../../classes/tierContract';
import { TxOverrides, ReadTxOverrides } from '../../classes/rainContract';
import {
  ERC20BalanceTier__factory,
  ERC20BalanceTierFactory__factory,
  IERC20__factory,
} from '../../typechain';

/**
 * @public
 * A class for deploying and calling methods on a ERC20BalanceTier.
 *
 * @remarks
 *  This class provides an easy way to deploy ERC20BalanceTiers using Rain's canonical factories,
 * and methods for interacting with an already deployed ERC20BalanceTier.
 *
 * The `ERC20BalanceTier` simply checks the current balance of an erc20 against tier values.
 * As the current balance is always read from the erc20 contract directly there is no historical
 * block data.
 *
 * @example
 * ```typescript
 * import { ERC20BalanceTier } from 'rain-sdk'
 *
 * // To deploy a new ERC20BalanceTier, pass an ethers.js Signer and the config for the ERC20BalanceTier.
 * const newTier = await ERC20BalanceTier.deploy(signer, ERC20BalanceTierArgs);
 *
 * // To connect to an existing ERC20BalanceTier just pass the tier address, token address and an ethers.js Signer.
 * const existingTier = new ERC20BalanceTier(address, signer[, tokenAddress]);
 *
 * // Once you have a ERC20BalanceTier, you can call the smart contract methods:
 * const tierValues = await existingTier.tierValues();
 * ```
 *
 */
export class ERC20BalanceTier extends TierContract {
  protected static readonly nameBookReference: string =
    'erc20BalanceTierFactory';

  /**
   * Constructs a new ERC20BalanceTier from a known address.
   *
   * @param address - The address of the ERC20BalanceTier contract
   * @param signer - An ethers.js Signer
   * @returns A new ERC20BalanceTier instance
   *
   */
  constructor(address: string, signer: Signer, tokenAddress: string = '') {
    ERC20BalanceTier.checkAddress(address);
    super(address, signer);
    const _erc20balanceTier = ERC20BalanceTier__factory.connect(
      address,
      signer
    );
    this.tierValues = _erc20balanceTier.tierValues;
    this.token = tokenAddress;
  }

  /**
   * ERC20 Token address that track the Tier
   */
  public readonly token: string;

  /**
   * Deploys a new ERC20BalanceTier.
   *
   * @param signer - An ethers.js Signer
   * @param args - Arguments for deploying a ERC20BalanceTier @see ERC20BalanceTierDeployArgs
   * @param overrides - @see TxOverrides
   * @returns A new ERC20BalanceTier instance
   */
  public static deploy = async (
    signer: Signer,
    args: ERC20BalanceTierDeployArgs,
    overrides: TxOverrides = {}
  ): Promise<ERC20BalanceTier> => {
    const erc20BalanceTierFactory = ERC20BalanceTierFactory__factory.connect(
      this.getBookAddress(await this.getChainId(signer)),
      signer
    );

    const tx = await erc20BalanceTierFactory.createChildTyped(args, overrides);
    const receipt = await tx.wait();
    const address = this.getNewChildFromReceipt(
      receipt,
      erc20BalanceTierFactory
    );
    return new ERC20BalanceTier(address, signer, args.erc20);
  };

  public readonly connect = (signer: Signer): ERC20BalanceTier => {
    return new ERC20BalanceTier(this.address, signer, this.token);
  };

  /**
   * Get a new instance with the token address provided.
   *
   * This method must be used if the token address is not provided in construction moment. The class use
   * this address to make calculations related with the Tier. The token address provided should be the
   * same that the Tier is using to work correctly.
   * @param tokenAddress - The ERC20 token address related to the tier
   * @returns A new instance with the token address ready to use the helper methods
   */
  public readonly addTokenAddress = (
    tokenAddress: string
  ): ERC20BalanceTier => {
    return new ERC20BalanceTier(this.address, this.signer, tokenAddress);
  };

  /**
   * Checks if address is registered as a child contract of this contract in a specific network.
   *
   * @remarks
   * The methods require a signer that will be used to call to the Factory Contract and ask if the
   * address provided is a child. Also it is necessary to get the current Chain ID using the provider
   * in the signer.
   *
   * @param signer - An ethers.js Signer
   * @param maybeChild - Address to check registration for.
   * @returns `true` if address was deployed by this contract factory, otherwise `false`
   */
  public static isChild = async (
    signer: Signer,
    maybeChild: string
  ): Promise<boolean> => {
    return await this._isChild(signer, maybeChild);
  };

  /**
   * Calculate how much amount of the token needed transfer to or transfer out of the account to reach a `desiredLevel`.
   *
   * Take in mind:
   *  - If the `desired level` is higher than the current level, the amount returned will be the amount
   * needed to obtain or transfer to the `account`.
   *  - If the `desired level` is lower than the current level, the amount returned will be the amount
   * needed to remove or transfer out of the `account`.
   * - If already have the `desired` tier, will return 0
   *
   * @param desiredLevel - the tier level desired to get
   * @param account - (optional) the account address to calculate. If not provided will use the signer of
   * the instance
   * @returns The amount t
   */
  public async amountToTier(
    account: string,
    desiredLevel: number
  ): Promise<BigNumber> {
    if (!this.token) {
      throw new Error(
        'Missing ERC20 Token address in the instance. Please, use addTokenAddress'
      );
    }

    const token = IERC20__factory.connect(this.token, this.signer);
    const values = await this.tierValues();

    const amountDestiny = desiredLevel
      ? values[desiredLevel - 1]
      : BigNumber.from(0);

    const amountOrigin = await token.balanceOf(
      account || (await this.signer.getAddress())
    );

    return amountDestiny.sub(amountOrigin).abs();
  }

  /**
   * It is NOT implemented in BalanceTiers. Always will throw an error
   */
  public readonly setTier = async (
    account: string,
    endTier: BigNumberish,
    data: BytesLike,
    overrides?: TxOverrides
  ): Promise<never> => {
    throw new Error('SET TIER: NOT IMPLEMENTED');
  };

  /**
   * Complements the default solidity accessor for `tierValues`. Returns all the values in a
   * listrather than requiring an index be specified.
   *
   * @param overrides - @see ReadTxOverrides
   * @returns The immutable `tierValues[8]`.
   */
  public readonly tierValues: (
    overrides?: ReadTxOverrides
  ) => Promise<BigNumber[]>;
}

/**
 * @public
 * Constructor config for ERC20BalanceTier
 */
export interface ERC20BalanceTierDeployArgs {
  /**
   * The erc20 token contract to check the balance of at `report` time
   */
  erc20: string;
  /**
   * 8 values corresponding to minimum erc20 balances for tier 1 through tier 8
   */
  tierValues: BigNumberish[];
}
