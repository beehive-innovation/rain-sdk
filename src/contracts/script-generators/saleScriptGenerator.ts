import { BigNumberish, BigNumber, BytesLike, ethers } from 'ethers';
import { SaleContext, SaleStorage } from '../sale';
import { StateConfig, VM } from '../../classes/vm';
import { parseUnits, concat, op, arrayify } from '../../utils';

/**
 * @public
 * Standard cap per wallet modes
 */
export enum BuyCapMode {
  /**
   * minimum buy cap, i.e. cannot buy less than a specefied amount
   */
  min,
  /**
   * maximum buy cap, i.e. cannot buy more than a specefied amount
   */
  max,
  /**
   * both minimum and maximum buy cap, i.e. cannot buy less than a specefied 
   * amount and more than another specified amount
   */
  both
}

/**
 * @public - PriceCurve is an class that all the other sale types (sub-classes) will inherit from.
 *
 * @remarks - It holds all the global methods for generating a sale script with different features for a sale
 * such as tier discount which makes depolying a new sale contracts with different features easy.
 *
 * @remarks - the order of calling the methods of this class is important, meaning in order to get the
 * desired result for the sale, mthods should be called in correct order, although it is worth saying
 * that even if the order is not followed, the result will still be reliable if that is been done by intention.
 * For example if we call 'applyExtraTime' method after the the 'applyTierDiscount' method, the extra
 * time discount will be applied to the result of 'applyTierDiscount' and if before that, it will be vice versa.
 * The general order for calling these methods is:
 *    1.applyExtraTimeDiscount
 *    2.applyTierDiscount
 *
 */
export class PriceCurve {

  // StateConfig Properties of this class
  public constants: BigNumberish[];
  public sources: BytesLike[];

  /**
   * Constructor of PriceCurve class.
   *
   * @param stateConfig - A StatecConfig
   */
  constructor(stateConfig: StateConfig) {
    this.constants = stateConfig.constants;
    this.sources = stateConfig.sources;
  }

  /**
   * Method to apply extra time discount to the sale. if sale's continues into extra time
   * then those addresses that have met the critera of extra time discount which is already
   * purchased a certain amount of rTKN will get some discount on price for their next purchase.
   *
   * @remarks - Sale should have extra time feature in order for extra time discount to be effective.
   * @see SaleDuration.applyExtraTime - to deploy a sale that has extra time feature
   *
   * @param endTimestamp - Usual end time of the sale.
   * @param extraTimeDiscountThreshold - the criteria for extra time discount, if the address has already
   * purchased more than this amount then it will recieve the discount for its next purchases once the sale
   * is gone into extra time.
   * @param extraTimeDiscount - The amount of discount the address will receive.
   *
   * @returns this
   *
   */
  public applyExtraTimeDiscount(
    endTimestamp: number,
    extraTimeDiscountThreshold: number,
    extraTimeDiscount: number
  ): this {

    let _saleDiscount: StateConfig;

    const EXTRA_TIME_DISCOUNT = () =>
      concat([
        op(VM.Opcodes.CONSTANTS, 0),
        op(VM.Opcodes.BLOCK_TIMESTAMP),
        op(VM.Opcodes.GREATER_THAN),
        op(VM.Opcodes.CONSTANTS, 1),
        op(VM.Opcodes.STORAGE, SaleStorage.TokenAddress),
        op(VM.Opcodes.SENDER),
        op(VM.Opcodes.IERC20_BALANCE_OF),
        op(VM.Opcodes.GREATER_THAN),
        op(VM.Opcodes.ANY, 2),
      ]);

    const DISCOUNT_CONDITION_SOURCES = () =>
      concat([
        op(VM.Opcodes.CONSTANTS, 2),
        op(VM.Opcodes.MUL, 2),
        op(VM.Opcodes.CONSTANTS, 3),
        op(VM.Opcodes.DIV, 2),
        op(VM.Opcodes.EAGER_IF),
      ]);

    _saleDiscount = VM.combiner(
      this, 
      {
        constants: [
          endTimestamp,
          parseUnits(extraTimeDiscountThreshold.toString()),
          100 - extraTimeDiscount,
          100
        ],
        sources: [EXTRA_TIME_DISCOUNT()]
      },
      {position: [0]}
    );

    _saleDiscount.sources[0] = concat([
      _saleDiscount.sources[0],
      op(VM.Opcodes.STACK, 1),
      DISCOUNT_CONDITION_SOURCES()
    ])

    this.constants = _saleDiscount.constants;
    this.sources = _saleDiscount.sources;

    return this;
  }

  /**
   * Method to apply tiers' discounts to the sale. Tiered addresses will get discount based on the tier they hold.
   *
   * @param tierAddress - The Tier contract address.
   * @param tierDiscount - An array of each tiers' discount ranging between 0 - 99.
   * @param tierActivation - (optional) An array of number of blocks for each tier that will be the required period 
   * of time for that tiered address to hold the tier's in order to be eligible for that tier's discount.
   *
   * @returns this
   *
   */
  public applyTierDiscount(
    tierAddress: string,
    tierDiscount: number[],
    tierActivation?: (number | string)[]
  ): this {

    const _discountConfig = VM.toTierDiscounter(
      this,
      tierAddress,
      tierDiscount,
      { tierActivation }
    );

    this.constants = _discountConfig.constants;
    this.sources = _discountConfig.sources;

    return this;
  }
  
}

/**
 * @public - A sub-class of PriceCurve for creating a Fixed Price sale type.
 * The price is a constant value over the span of the sale.
 *
 * @example
 * ```typescript
 * //For generating a Fixed Price sale type pass in the required arguments to the constructor.
 * const saleType = new FixedPrice(price)
 * ```
 */
export class FixedPrice extends PriceCurve {
  /**
   * Constructs a new raw FixedPrice sale type to be used in a Sale contract.
   *
   * @param price - The constant price of the rTKN.
   * @param erc20decimals - (optional) Number of decimals of the reserve asset (default value 18).
   *
   * @returns a VM StateConfig
   *
   */
  constructor(price: BigNumberish, erc20decimals: number = 18) {
    super({
      constants: [parseUnits(BigNumber.from(price).toString(), erc20decimals)],
      sources: [
        concat([
          FixedPrice.FIXED_PRICE_SOURCES()
        ])
      ]
    });
  }

  // fixed price script
  public static FIXED_PRICE_SOURCES = () => concat([op(VM.Opcodes.CONSTANTS, 0)]);
}

/**
 * @public - A sub-class of PriceCurve for creating an vLBP i.e virtual LBP sale type.
 *
 * @remarks - It is called virtual FLO or LBP because there is no actual seeding required.
 * Price starts at 'startPrice' and goes to down over the span of the sale's duration
 * if no buys happen. If buys happen then price will go up (exactly like the real LBP)
 *
 * @example
 * ```typescript
 * //For generating a vLBP sale type pass in the required arguments to the constructor.
 * const saleType = new vLBP(startPrice, startTimestamp, endTimestamp, minimumRaise, initialSupply)
 * ```
 */
export class vLBP extends PriceCurve {
  /**
   * Constructs a new raw vLBP sale type to be used in a Sale contract.
   *
   * @param startPrice - The starting price of the sale for rTKN.
   * @param startTimestamp - Start timestamp of the sale for rTKN.
   * @param endTimestamp - End timestamp of the sale.
   * @param minimumRaise - Used for virtualizing the seed amount and calculating the assets' weights.
   * @param initialSupply - Used for calculating the assets' weights.
   * @param erc20decimals - (optional) Number of decimals of the reserve asset. (default value 18)
   *
   * @returns a VM StateConfig
   *
   */
  constructor(
    startPrice: number,
    startTimestamp: number,
    endTimestamp: number,
    minimumRaise: number,
    initialSupply: number,
    erc20decimals: number = 18
  ) {
    let raiseDuration = endTimestamp - startTimestamp;
    let balanceReserve = minimumRaise * 5;
    let initWeight = (initialSupply * startPrice) / balanceReserve;
    let weightChange = (initWeight - 1) / raiseDuration;
    super({
      constants: [
        parseUnits(balanceReserve.toString(), erc20decimals),
        parseUnits(initWeight.toString()),
        parseUnits(weightChange.toFixed(5).toString()),
        startTimestamp,
        parseUnits((1).toString()),
      ],
      sources: [
        concat([
          vLBP.vLBP_SOURCES()
        ])
      ]
    });
  }

  //vLBP script
  public static vLBP_SOURCES = () =>
    concat([
      op(VM.Opcodes.STORAGE, SaleStorage.TotalReserveIn),
      op(VM.Opcodes.CONSTANTS, 0),
      op(VM.Opcodes.ADD, 2),
      op(VM.Opcodes.CONSTANTS, 1),
      op(VM.Opcodes.BLOCK_TIMESTAMP),
      op(VM.Opcodes.CONSTANTS, 3),
      op(VM.Opcodes.SATURATING_SUB, 2),
      op(VM.Opcodes.CONSTANTS, 2),
      op(VM.Opcodes.MUL, 2),
      op(VM.Opcodes.SATURATING_SUB, 2),
      op(VM.Opcodes.CONSTANTS, 4),
      op(VM.Opcodes.MAX, 2),
      op(VM.Opcodes.MUL, 2),
      op(VM.Opcodes.STORAGE, SaleStorage.RemainingUnits),
      op(VM.Opcodes.DIV, 2),
    ]);
}

/**
 * @public - A sub-class of PriceCurve for creating an linear Increasing sale type.
 *
 * @remarks - Price starts at 'startPrice' and goes to 'endPrice' over the span of the sale's duration.
 *
 * @example
 * ```typescript
 * //For generating a Increasing Price sale type pass in the required arguments to the constructor.
 * const saleType = new IncreasingPrice(startPrice, endPrice, startTimestamp, endTimestamp)
 * ```
 */
export class IncreasingPrice extends PriceCurve {
  /**
   * Constructs a new raw linear Increasing Price sale type to be used in a Sale contract.
   *
   * @param startPrice - The starting price of the sale for rTKN.
   * @param endPrice - The ending price of the sale for rTKN.
   * @param startTimestamp - Start timestamp of the sale.
   * @param endTimestamp - End timestamp of the sale
   * @param erc20decimals - (optional) Number of decimals of the reserve asset. (default value 18)
   *
   * @returns a VM StateConfig
   *
   */
  constructor(
    startPrice: number,
    endPrice: number,
    startTimestamp: number,
    endTimestamp: number,
    erc20decimals: number = 18
  ) {
    let raiseDuration = endTimestamp - startTimestamp;
    let priceChange = (endPrice - startPrice) / raiseDuration;
    super({
      constants: [
        parseUnits(startPrice.toString(), erc20decimals),
        parseUnits(endPrice.toString(), erc20decimals),
        parseUnits(priceChange.toFixed(5).toString()),
        startTimestamp,
      ],
      sources: [
        concat([
          IncreasingPrice.INC_PRICE_SOURCES()
        ])
      ]
    });
  }

  // linear increasing price script
  public static INC_PRICE_SOURCES = () =>
    concat([
      op(VM.Opcodes.BLOCK_TIMESTAMP),
      op(VM.Opcodes.CONSTANTS, 3),
      op(VM.Opcodes.SUB, 2),
      op(VM.Opcodes.CONSTANTS, 2),
      op(VM.Opcodes.MUL, 2),
      op(VM.Opcodes.CONSTANTS, 0),
      op(VM.Opcodes.ADD, 2),
      op(VM.Opcodes.CONSTANTS, 1),
      op(VM.Opcodes.MIN, 2),
    ]);
}

/**
 * @public - A class used for creating a VM state for Sale's canLive StateConfig based on timestamp.
 *
 * @remarks - If the VM result is greater than '0' then sale can live and if it is '0' it simply
 * cannot. The basic constructed object is a simple timestamp based condition for sale's
 * canLive StateConfig, but with using the methods in the class more complex conditions
 * can be created for how the sale's duration will work.
 *
 * @remarks - Like all the method calls, order of calling methods in this class is important in order to produce
 * the desired result, although calling in any order will produce a reliable result, that depends on what the
 * intention is. For example 'applyOwner' should be called at last in order to apply the ownership over the whole script.
 * The general methods calling order in this class is:
 *    1.applyExtarTime or afterMinimumRaise (one of which only)
 *    2.applyOwner
 *
 * @example
 * ```typescript
 * //For generating a canLive StateConfig for the sale pass in the required arguments to the constructor.
 * const saleDuration = new SaleDuration(startTimestamp, endTimestamp)
 * ```
 */
export class SaleDurationInTimestamp {

  // StateConfig Properties of this class
  public constants: BigNumberish[];
  public sources: BytesLike[];

  /**
   * Constructs a new canLive config to be used in a Sale contract's canLive functions.
   *
   * @param startTimestamp - Timestamp that will be used in constructor to create a simple timestamp based canLive condition.
   * If the current timestamp is greater than 'startTimestamp' the sale can live (start, i.e. status from Pending to Active).
   * @param endTimestamp - Timestamp that will be used in constructor to create a simple time based canLive condition.
   * If the current timestamp is less than 'endTimestamp' the sale can live or in other words stay Active and if not it can end
   * (i.e status from Active to Success/Fail).
   *
   */
  constructor(
    public readonly startTimestamp: number,
    public readonly endTimestamp: number
  ) {
    this.constants = [startTimestamp, endTimestamp];
    this.sources = [
      concat([
        op(VM.Opcodes.BLOCK_TIMESTAMP),
        op(VM.Opcodes.CONSTANTS, 0),
        op(VM.Opcodes.GREATER_THAN),
        op(VM.Opcodes.BLOCK_TIMESTAMP),
        op(VM.Opcodes.CONSTANTS, 1),
        op(VM.Opcodes.LESS_THAN),
        op(VM.Opcodes.EVERY, 2)
      ]),
    ];
  }

  /**
   * Method to apply extra time to the sale duration. if the extra time criteria which is raising more
   * than 'extraTimeAmount' has been met the sale continue for longer (for 'extraTime' more minutes).
   *
   * @remarks - If the sale has extra time discount, it is important that this method to be applied for canEndStateConfig of the sale.
   * @see PriceCurve.applyExtraTimeDiscount - to deploy a sale that has discount when it goes into extra time.
   *
   * @param extraTime - The amount of time (in minutes) that sale can continue for, if the extra time criteria has been met.
   * @param extraTimeAmount - The criteria for extra time, if the raised amount exceeds this amount then the raise can continue into extra time.
   *
   * @returns this
   *
   */
  public applyExtraTime(
    extraTime: number,
    extraTimeAmount: number,
    erc20decimals: number = 18
  ): this {

    const ExtraTimeAmount = parseUnits(extraTimeAmount.toString(), erc20decimals);
    const ExtraTime = extraTime * 60 + this.endTimestamp;

    let _extraTime: StateConfig = {
      constants: [ExtraTime, ExtraTimeAmount],
      sources: [
        concat([
          op(VM.Opcodes.CONSTANTS, 1),
          op(VM.Opcodes.STORAGE, SaleStorage.TotalReserveIn),
          op(VM.Opcodes.LESS_THAN),
          op(VM.Opcodes.ANY, 2),
          op(VM.Opcodes.BLOCK_TIMESTAMP),
          op(VM.Opcodes.CONSTANTS, 0),
          op(VM.Opcodes.LESS_THAN),
          op(VM.Opcodes.EVERY, 2),
        ])
      ]
    };

    _extraTime = VM.combiner(this, _extraTime, {position: [6]})
    
    this.constants = _extraTime.constants;
    this.sources = _extraTime.sources;

    return this;
  }

  /**
   * Method to apply owner to the sale's canLive function.
   * Sale's canLive functions are public and can be triggered by anyone when the criteria is met, but with using this method for sale's
   * canLive StateConfig, it can be configured in a way that only a certain address can actually trigger the sale's start/end functions.
   *
   * @remarks - applyOwnership will apply the ownership over the StateConfig it is been called for, so the order of call is important to get
   * the desired result.
   *
   * @param ownerAddress - The address that will be the owner, only this wallet address can start or end a raise if this method is applied.
   *
   * @returns this
   *
   */
  public applyOwnership(ownerAddress: string): this {
    this.constants.push(ownerAddress, 0, ethers.constants.MaxUint256);

    let src = arrayify(this.sources[0], {allowMissingPrefix: true});
    src = src.slice(0, src.length - 2);

    let _top = src.slice(0, 6);
    _top = concat([
      op(VM.Opcodes.CONSTANTS, this.constants.length - 3),
      op(VM.Opcodes.SENDER),
      op(VM.Opcodes.EQUAL_TO),
      _top,
      op(VM.Opcodes.EVERY, 2),
    ]);

    let _bottom = src.slice(6);
    _bottom = concat([
      op(VM.Opcodes.CONSTANTS, this.constants.length - 3),
      op(VM.Opcodes.SENDER),
      op(VM.Opcodes.EQUAL_TO),
      op(VM.Opcodes.CONSTANTS, this.constants.length - 2),
      op(VM.Opcodes.CONSTANTS, this.constants.length - 1),
      op(VM.Opcodes.EAGER_IF),
      _bottom,
      op(VM.Opcodes.ANY, 2),
      op(VM.Opcodes.EVERY, 2),
    ]);
    
    this.sources = [concat([_top, _bottom])];

    return this;
  }

  /**
   * A method for the sale to be able to end once the sale hits minimumRaise i.e. the minimum amount
   * that needs to be raiseed so the raises status becomes "success" after raise ends.
   * 
   * @remark please note that this method should not be used with applyExtraTime as they are opossit 
   * of eachother and also the order of using this method along with other methods of this class is 
   * important
   * 
   * @param minimumRaise - the minimumRaise parameter of the raise which is passed at the time of
   * sale's deployment as part of the SaleConfig
   *  
   * @returns this
   */
  public afterMinimumRaise (minimumRaise: number, erc20decimals: number = 18) : this {
    const MinimumRaise = parseUnits(minimumRaise.toString(), erc20decimals);

    let _minimumRaise: StateConfig = {
      constants: [MinimumRaise],
      sources: [
        concat([
          op(VM.Opcodes.CONSTANTS, 1),
          op(VM.Opcodes.STORAGE, SaleStorage.TotalReserveIn),
          op(VM.Opcodes.LESS_THAN),
          op(VM.Opcodes.ANY, 2),
        ])
      ]
    };
    _minimumRaise = VM.combiner(this, _minimumRaise, {position: [6]})

    this.constants = _minimumRaise.constants;
    this.sources = _minimumRaise.sources;

    return this
  }
}

/**
 * @public - A class used for creating a VM state for Sale's canLive StateConfig based on block number.
 *
 * @remarks - If the VM result is greater than '0' then sale can live and if it is '0' it simply
 * cannot. The basic constructed object is a simple block number based condition for sale's
 * canLive StateConfig, but with using the methods in the class more complex conditions
 * can be created for how the sale's duration will work.
 * It is worth mentioning that using a timestamp based canLive StateConfig is much more desireable as most of the
 * PriceCurve configs are designed with timestamp, so if you want to use the block number based canLive StateConfig,
 * please make sure to to match with timestamp used in PriceCurve configs.
 *
 * @remarks - Like all the method calls, order of calling methods in this class is important in order to produce
 * the desired result, although calling in any order will produce a reliable result, that depends on what the
 * intention is. For example 'applyOwner' should be called at last in order to apply the ownership over the whole script.
 * The general methods calling order in this class is:
 *    1.applyExtarTime or afterMinimumRaise (one of which only)
 *    2.applyOwner
 *
 * @example
 * ```typescript
 * //For generating a canLive StateConfig for the sale pass in the required arguments to the constructor.
 * const saleDuration = new SaleDuration(startBlockNumber, endBlockNumber)
 * ```
 */
export class SaleDurationInBlocks {

  // StateConfig Properties of this class
  public constants: BigNumberish[];
  public sources: BytesLike[];

  /**
   * Constructs a new canLive config to be used in a Sale contract's canLive functions.
   *
   * @param startBlockNumber - blockNumber that will be used in constructor to create a simple block number based canLive condition.
   * If the current BlockNumber is greater than 'startBlockNumber' the sale can live (start).
   * @param endBlockNumber - blockNumber that will be used in constructor to create a simple block number based canLive condition.
   * If the current BlockNumber is less than 'endBlockNumber' the sale can live.
   *
   */
  constructor(
    public readonly startBlockNumber: number,
    public readonly endBlockNumber: number
  ) {
    this.constants = [startBlockNumber - 1, endBlockNumber - 1];
    this.sources = [
      concat([
        op(VM.Opcodes.BLOCK_NUMBER),
        op(VM.Opcodes.CONSTANTS, 0),
        op(VM.Opcodes.GREATER_THAN),
        op(VM.Opcodes.BLOCK_NUMBER),
        op(VM.Opcodes.CONSTANTS, 1),
        op(VM.Opcodes.LESS_THAN),
        op(VM.Opcodes.EVERY, 2),
      ]),
    ];
  }

  /**
   * Method to apply extra time to the sale duration. if the extra time criteria which is raising more
   * than 'extraTimeAmount' has been met the sale continue for longer (for 'extraTimeBlocks' more blocks).
   *
   * @remarks - If the sale has extra time discount, it is important that this method to be applied for canEndStateConfig of the sale.
   * @remarks - This method is designed for sale's canEndStateConfig and should 'not' be used for canStart
   * @see PriceCurve.applyExtraTimeDiscount - to deploy a sale that has discount when it goes into extra time.
   *
   * @param extraTimeBlocks - The amount of time (in blocks) that sale can continue for, if the extra time criteria has been met.
   * @param extraTimeAmount - The criteria for extra time, if the raised amount exceeds this amount then the raise can continue into extra time.
   *
   * @returns this
   *
   */
  public applyExtraTime(
    extraTimeBlocks: number,
    extraTimeAmount: number,
    erc20decimals: number = 18
  ): this {

    const ExtraTimeAmount = parseUnits(extraTimeAmount.toString(), erc20decimals);
    const ExtraTime = extraTimeBlocks + this.endBlockNumber;

    let _extraTime: StateConfig = {
      constants: [ExtraTime, ExtraTimeAmount],
      sources: [
        concat([
          op(VM.Opcodes.CONSTANTS, 1),
          op(VM.Opcodes.STORAGE, SaleStorage.TotalReserveIn),
          op(VM.Opcodes.LESS_THAN),
          op(VM.Opcodes.ANY, 2),
          op(VM.Opcodes.BLOCK_NUMBER),
          op(VM.Opcodes.CONSTANTS, 0),
          op(VM.Opcodes.LESS_THAN),
          op(VM.Opcodes.EVERY, 2),
        ])
      ]
    };

    _extraTime = VM.combiner(this, _extraTime, {position: [6]})
    
    this.constants = _extraTime.constants;
    this.sources = _extraTime.sources;

    return this;
  }

  /**
   * Method to apply owner to the sale's canLive function.
   * Sale's canLive functions are public and can be triggered by anyone when the criteria is met, but with using this method for sale's
   * canLive StateConfig, it can be configured in a way that only a certain address can actually trigger the sale's start/end functions.
   *
   * @remarks - applyOwnership will apply the ownership over the StateConfig it is been called for, so the order of call is important to get
   * the desired result.
   *
   * @param ownerAddress - The address that will be the owner, only this wallet address can start or end a raise if this method is applied.
   *
   * @returns this
   *
   */
  public applyOwnership(ownerAddress: string): this {
    this.constants.push(ownerAddress, 0, ethers.constants.MaxUint256);

    let src = arrayify(this.sources[0], {allowMissingPrefix: true});
    src = src.slice(0, src.length - 2);

    let _top = src.slice(0, 6);
    _top = concat([
      op(VM.Opcodes.CONSTANTS, this.constants.length - 3),
      op(VM.Opcodes.SENDER),
      op(VM.Opcodes.EQUAL_TO),
      _top,
      op(VM.Opcodes.EVERY, 2),
    ]);

    let _bottom = src.slice(6);
    _bottom = concat([
      op(VM.Opcodes.CONSTANTS, this.constants.length - 3),
      op(VM.Opcodes.SENDER),
      op(VM.Opcodes.EQUAL_TO),
      op(VM.Opcodes.CONSTANTS, this.constants.length - 2),
      op(VM.Opcodes.CONSTANTS, this.constants.length - 1),
      op(VM.Opcodes.EAGER_IF),
      _bottom,
      op(VM.Opcodes.ANY, 2),
      op(VM.Opcodes.EVERY, 2),
    ]);
    
    this.sources = [concat([_top, _bottom])];

    return this;
  }

  /**
   * A method for the sale to be able to end once the sale hits minimumRaise i.e. the minimum amount
   * that needs to be raiseed so the raises status becomes "success" after raise ends.
   * 
   * @remark please note that this method should not be used with applyExtraTime as they are opossit 
   * of eachother and also the order of using this method along with other methods of this class is 
   * important
   * 
   * @param minimumRaise - the minimumRaise parameter of the raise which is passed at the time of
   * sale's deployment as part of the SaleConfig
   *  
   * @returns this
   */
  public afterMinimumRaise (minimumRaise: number, erc20decimals: number = 18) : this {
    const MinimumRaise = parseUnits(minimumRaise.toString(), erc20decimals);

    let _minimumRaise: StateConfig = {
      constants: [MinimumRaise],
      sources: [
        concat([
          op(VM.Opcodes.CONSTANTS, 1),
          op(VM.Opcodes.STORAGE, SaleStorage.TotalReserveIn),
          op(VM.Opcodes.LESS_THAN),
          op(VM.Opcodes.ANY, 2),
        ])
      ]
    };
    _minimumRaise = VM.combiner(this, _minimumRaise, {position: [6]})

    this.constants = _minimumRaise.constants;
    this.sources = _minimumRaise.sources;

    return this
  }
};


/**
 * @public
 * The fisrt piece of script in a sale's amount/price pair script which determines the amoount 
 * or cap that can be bought.
 * 
 */
export class BuyCap {

  // StateConfig Properties of this class
  public constants: BigNumberish[];
  public sources: BytesLike[];

  /**
   * Constructor for this class
   * 
   * @param buyCapConfig - (optional) a custom StateConfig as the BuyCap (amount) script
   * if not passed the current buy units (CONTEXT, 0) will be used as the amount in 
   * amount/price script pair for the sale.
   */
  constructor (public readonly buyCapConfig?: StateConfig) {

    if (buyCapConfig != undefined) {
      this.constants = buyCapConfig.constants;
      this.sources = buyCapConfig.sources;
    }
    else {
      this.constants = [];
      this.sources = [
        concat([
          op(VM.Opcodes.CONTEXT, SaleContext.CurrentBuyUnits)
        ])
      ]
    }
  }

  /**
   * Method to apply cap per wallet to the sale. addresses can only buy that certain amount of rTKNs.
   * With the option of applying multiplier for max cap per wallet.
   *
   * @param mode - The mode that determines if there is max or min cap per wallet or both.
   * @param options - (optional) Additional arguments to configure the cap per wallet behaviour:
   *    - (param) minWalletCap - The number for min cap per wallet, addresses cannot buy less number of rTKNs than this amount.
   *    - (param) maxWalletCap - The number for max cap per wallet, addresses cannot buy more number of rTKNs than this amount.
   *    - (param) tierAddress - The Tier contract address for tiers' max cap per wallet multiplier.
   *    - (param) tierMultiplier - An array of each tiers' Multiplier value.
   *    - (param) tierActivation - An array of number of blocks for each tier that will be the required period of time for that tiered
   *       address to hold the tier's in order to be eligible for that tier's multiplier.
   *
   * @returns this
   *
   */
  public applyWalletCap(
    mode: BuyCapMode,
    options?: {
      minWalletCap?: number;
      maxWalletCap?: number;
      tierAddress?: string;
      tierMultiplier?: number[];
      tierActivation?: (number | string)[];
    }
  ): this {

    const MIN_CAP_SOURCES = (i: number) =>
      concat([
        op(VM.Opcodes.CONSTANTS, i),
        op(VM.Opcodes.CONTEXT, SaleContext.CurrentBuyUnits),
        op(VM.Opcodes.STORAGE, SaleStorage.TokenAddress),
        op(VM.Opcodes.SENDER),
        op(VM.Opcodes.IERC20_BALANCE_OF),
        op(VM.Opcodes.ADD, 2),
        op(VM.Opcodes.LESS_THAN),
      ]);
    const MAX_CAP_SOURCES = () =>
      concat([
        op(VM.Opcodes.CONTEXT, SaleContext.CurrentBuyUnits),
        op(VM.Opcodes.STORAGE, SaleStorage.TokenAddress),
        op(VM.Opcodes.SENDER),
        op(VM.Opcodes.IERC20_BALANCE_OF),
        op(VM.Opcodes.ADD, 2),
        op(VM.Opcodes.GREATER_THAN),
      ]);

    if (mode == BuyCapMode.min && options?.minWalletCap) {
      let minCapConfig: StateConfig = {
        constants: [parseUnits(options.minWalletCap.toString()).sub(1)],
        sources: [MIN_CAP_SOURCES(0)]
      };

      minCapConfig = VM.combiner(minCapConfig, this);
      minCapConfig.sources[0] = concat([
        minCapConfig.sources[0],
        op(VM.Opcodes.MUL, 2)
      ]);

      this.constants = minCapConfig.constants;
      this.sources = minCapConfig.sources;
    } 
    if (mode == BuyCapMode.max && options?.maxWalletCap) {
      let maxCapConfig: StateConfig;

      if (
        options.tierMultiplier &&
        options.tierAddress
      ) {
        maxCapConfig = VM.toTierMultiplier(
          {
            constants: [
              parseUnits(options.maxWalletCap.toString())
            ],
            sources: [
              concat([op(VM.Opcodes.CONSTANTS, 0)])
            ]
          },
          options.tierAddress,
          options.tierMultiplier,
          { tierActivation: options.tierActivation }
        );
        maxCapConfig = VM.combiner(
          maxCapConfig,
          {
            constants: [1],
            sources: [
              concat([
                op(VM.Opcodes.CONSTANTS, 0),
                op(VM.Opcodes.ADD, 2),
                MAX_CAP_SOURCES(),
              ])
            ]
          }
        );
        maxCapConfig = VM.combiner(maxCapConfig, this);
        maxCapConfig.sources[0] = concat([
          maxCapConfig.sources[0],
          op(VM.Opcodes.MUL, 2)
        ]);

        this.constants = maxCapConfig.constants;
        this.sources = maxCapConfig.sources;
      }
      else {
        maxCapConfig = {
          constants: [parseUnits(options.maxWalletCap.toString()).add(1)],
          sources: [
            concat([
              op(VM.Opcodes.CONSTANTS, 0),
              MAX_CAP_SOURCES()
            ])
          ]
        }
        maxCapConfig = VM.combiner(maxCapConfig, this);
        maxCapConfig.sources[0] = concat([
          maxCapConfig.sources[0],
          op(VM.Opcodes.MUL, 2)
        ]);

        this.constants = maxCapConfig.constants;
        this.sources = maxCapConfig.sources;
      }
    }
    if (
      mode == BuyCapMode.both &&
      options?.minWalletCap &&
      options?.maxWalletCap
    ) {
      let bothCapConfig: StateConfig;

      if (
        options.tierMultiplier &&
        options.tierAddress
      ) {
        bothCapConfig = {
          constants: [parseUnits(options.maxWalletCap.toString())],
          sources: [concat([op(VM.Opcodes.CONSTANTS, 0)])]
        };
        bothCapConfig = VM.toTierMultiplier(
          bothCapConfig,
          options.tierAddress,
          options.tierMultiplier,
          { tierActivation: options.tierActivation }
        );

        bothCapConfig = VM.combiner(
          bothCapConfig,
          {
            constants: [1, parseUnits(options.minWalletCap.toString()).sub(1)],
            sources: [
              concat([
                op(VM.Opcodes.CONSTANTS, 0),
                op(VM.Opcodes.ADD, 2),
                MAX_CAP_SOURCES(),
                MIN_CAP_SOURCES(1),
                op(VM.Opcodes.EVERY, 2),
              ])
            ]
          }
        )

        bothCapConfig = VM.combiner(bothCapConfig, this);

        bothCapConfig.sources[0] = concat([
          bothCapConfig.sources[0],
          op(VM.Opcodes.MUL, 2)
        ]);

        this.constants = bothCapConfig.constants;
        this.sources = bothCapConfig.sources;
      } 
      else {
        bothCapConfig = {
          constants: [
            parseUnits(options.maxWalletCap.toString()).add(1),
            parseUnits(options.minWalletCap.toString()).sub(1)
          ],
          sources: [
            op(VM.Opcodes.CONSTANTS, 0),
            MAX_CAP_SOURCES(),
            MIN_CAP_SOURCES(1),
            op(VM.Opcodes.EVERY, 2),
          ]
        };
        bothCapConfig = VM.combiner(bothCapConfig, this);

        bothCapConfig.sources[0] = concat([
          bothCapConfig.sources[0],
          op(VM.Opcodes.MUL, 2)
        ])

        this.constants = bothCapConfig.constants;
        this.sources = bothCapConfig.sources;
      }
    }

    return this;
  }
}

/**
 * @public
 * Builds a sale compatible StateConfig out of 2 individual StateConfigs (canLive and calculateBuy)
 * 
 * @example
 * ```typescript
 * //For generating a sale compatible StateConfig for the sale pass in 2 individual scripts
 * (can use PriceCurves and CanLive classes).
 * const saleConfig = new SaleConfigBuilder(new FixedPrice, new CanLiveInTimestamp)
 * ```
 */
export class SaleScriptFrom {

  // StateConfig Properties of this class
  public constants: BigNumberish[];
  public sources: BytesLike[];

  /**
   * Constructor of this class
   * 
   * @param canLiveScript - canLive StateConfig
   * @param buyCapScript - the StateConfig for buy amount (mxUnits)
   * @param calculateBuyScript - the StateConfig for price
   */
  constructor (
    public readonly canLiveScript: SaleDurationInTimestamp | SaleDurationInBlocks | StateConfig,
    public readonly buyCapScript: BuyCap | StateConfig,
    public readonly calculateBuyScript: PriceCurve | StateConfig
  ) {
    let _saleConfig = VM.pair(buyCapScript, calculateBuyScript)
    _saleConfig = VM.combiner(canLiveScript, _saleConfig, {numberOfSources: 0});

    this.constants = _saleConfig.constants;
    this.sources = _saleConfig.sources;
  }
}