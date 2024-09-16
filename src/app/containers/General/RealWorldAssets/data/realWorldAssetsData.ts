import { assetPaths } from "../../../../common/constants";

export const realWorldAssetsData = [
  {
    imgPath: assetPaths.AUTOMATION,
    title: "Automation",
    list: [
      "QuarryChain’s Native Smart Contracts will have the ability to automate steps such as compliance, document verification, trading, and escrow. In today’s market where paper certificates are the norm, it can be very difficult to move in and out of an asset since ownership documents are often disjointed.”",
      "With tokens on the other hand, all that is necessary to validate ownership and the steps for appropriate transfer are programmed into and contained within the smart contract. When an owner wants to sell, the transaction is quick, cost effective and hassle free.",
    ],
  },
  {
    imgPath: assetPaths.TRADING,
    title: "Continuous Trading",
    list: [
      "Through Tokenization, you would have the ability to trade security tokens any time of the day, and at any day of the week. Now if you wanted trade a security on let’s say a regular Stock Exchange, then you would be subjugated to a strict limited trading time where you would only be able to trade on weekdays from 9:30 am to to 4:00 pm ",
      "But now that we have tokenized this asset and have it listed on QuarrySwap instead of a stock exchange, transactions will not be constrained to the operating hours of the exchange, buying and selling can now be conducted whenever and wherever!",
    ],
  },
  {
    imgPath: assetPaths.DEAL_EXECUTION,
    title: "Faster Deal Execution",
    list: [
      "When making a deal, speed is very critical. Typically a transaction will take longer to process as more and more people are involved.",
      "However, QuarryChain’s Native Smart Contracts can be settled within a few seconds utilizing QuarryChain’s Delegated Proof of Stake Consensus.",
    ],
  },
  {
    imgPath: assetPaths.COST_EFFICIENCY,
    title: "Cost Efficiencies",
    list: [
      "By removing certain intermediaries and simplifying ways in which liquidity can be unlocked, costs can be significantly lowered.",
    ],
  },
  {
    imgPath: assetPaths.FRACTIONALIZATION,
    title: "Fractionalization",
    list: [
      "The ability to fractionalize assets through tokenization will bring a flood of liquidity into markets where average investors have historically had little or no access.",
    ],
  },
  {
    imgPath: assetPaths.LIQUIDITY,
    title: "Increased Liquidity and Market Depth",
    list: [
      "The opportunity to monetize assets will be expanded dramatically because of tokenization. Today, many securities are illiquid because of regulatory concerns or because the cost of transfer is simply too high. The process of tracking trade activity can be manual, costly, and place a significant strain on issuers who need to protect themselves from regulatory risk.",
    ],
  },
];

export const approchQuerrySteps = [
  {
    title: "Selection of the Model Representing Assets",
    text: "Several token standards have emerged from the QuarryChain protocol to allow for the representation of different kinds of assets. The introduction of these standards eases the Blockchain adoption and enables interoperability between multiple DLT/Blockchain initiatives.This allows tokens inheriting from the same token standard (from the same ‘family’) to use smart contracts or to be stored in widespread wallets enabling the storage of ownership information. A token standard consists of a set of predefined functions and/or attributes that can be intentionally implemented to represent the specificities of each asset but need to be present in all cases. To consider which token standard to choose, the key characteristics of the asset (for instance fungible or non-fungible) should be assessed. Here are the following Token Standards available for the QuarryChain",
    image: assetPaths.MODEL_REPRESENTATION,
    isReverse: true,
  },
  {
    title: "Modeling of the Asset",
    text: "Before implementing the token model chosen for representing assets, one must ask several questions that will impact which information will be embedded on chain and which will remain stored in off-chain databases. The following points should at least be considered:• Are there any legal or regulatory constraints (e.g. data privacy and protection, sector-specific regulation, etc.)?• What is the level of trust required on the data?• What is the business process? Which information is essential for the process to happenproperly and which has an informative purpose?• What are the requirements in terms of scalability (volumetry of data)?This tailoring can include the management of permissioning to call specific functions, adding someadditional functions to be consistent with business requirements, the personalization of somegeneric functions, etc. Some additional considerations may be needed to develop the specificcode and behavior of the token, depending on the kind of assets considered.",
    image: assetPaths.MODELLING_ASSETS,
    isReverse: false,
  },
  {
    title: "Technical & Security of the Informatic Code:",
    text: "Before deploying a token on QuarryChain, some precautions need to be taken due to the immutability of Blockchain and the irreversibility of the development. Indeed, once the code ruling on how your asset will behave on DLT/Blockchain has been released, it is not possible to turn back.An example to bear in mind is what happened in June 2016 with “The DAO” which was a digital decentralized autonomous organization raising funds through crowdfunding and acting as a venture capital. After raising more than $150 million, some hackers took advantage of vulnerability issues and stole more than the equivalent of $50 million at the time.Therefore, it is very essential to perform automated security audits on QuarryChain, either utilitizing QuarryChain’s AI Smart Contract auditing system or using third party auditors (CERTIK, etc.) to perform an audit and provide a stamp before deploying the contract.",
    image: assetPaths.INFORMATIC_CODE,
    isReverse: true,
  },
  {
    title: "Deployment of the Informatic Code:",
    text: "After the security audit has been performed, the code can then simply be deployed on QuarryChain and be considered, either public or private depending on the use case and perimeter considered.These tokens will be able to be issued following the design implement, automatically or manually, by only one user or by multiple ones. Users will be able to interact with these tokens using the exposed function, by instance to transfer them.",
    image: assetPaths.DEPLOYMENT_INFO,
    isReverse: false,
  },
];
