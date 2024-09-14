import { assetPaths } from "../../../../../../../common/constants";
import { AppTheme } from "../../../../../../../global/theme";

export function handleSliderContentColor(step: number): string {
  if (step === 1 || step === 4) return AppTheme.colors.regular["lightRed"];
  if (step === 2 || step === 5) return AppTheme.colors.regular["lightGreen"];
  return AppTheme.colors.regular["lightBlue"];
}

export function handleSliderContentTitle(step: number): string {
  switch (step) {
    case 1:
      return "Quarry Wallet";
    case 2:
      return "Block Explorer";
    case 3:
      return "Quarry Coin";
    case 4:
      return "QuarrySwap";
    case 5:
      return "Tokenization of Real-World Assets";
    default:
      return "";
  }
}

export function handleSliderContentDescription(step: number): string {
  switch (step) {
    case 1:
      return "QuarryWallet-Cli is the official wallet client maintained by the QuarryChain foundation. QuarryWallet-Cli, the command-line version of the wallet, provides essential tools to communicate with the Quarry public chain via the RPC protocol and supports all functions of the Quarry public chain in real-time. QuarryWallet-Cli is also an excellent code implementation to show the interactive mode between clients and the blockchain for developers.";
    case 2:
      return "Quarry Scan is the first blockchain explorer based on QuarryChain. It has all the essential functions of a blockchain explorer, including searching transactions, accounts, blocks, nodes, smart contracts, on-chain statistics, token creations, etc. It has a built-in web wallet and a DEX based on the Bancor Protocol, enriching the application matrix of QuarryScan.";
    case 3:
      return "Quarry Coin is the official cryptocurrency for the QuarryChain Protocol. Quarry Coin aims to be a peer-to-peer internet currency that enables instant low-cost transactions to anyone in the world. Quarrycoin will feature faster transaction-confirmation times and improved storage efficiency than the leading math-based currency.";
    case 4:
      return "QuarrySwap is a decentralized exchange (DEX, for short), and one of Quarrychain's first Applications. QuarrySwap also happens to be non-custodial, meaning that unlike centralized exchanges, QuarrySwap does not need to possess your tokens in order for you to be able to trade them. Instead, QuarrySwap allows users to trade trustfully, peer-to-peer, with liquidity that is supplied by other users. This means that new projects can easily connect to their desired markets as long as some entity is willing to provide the liquidity.";
    case 5:
      return "QuarryChain enables tokenization of assets in a variety of industries to create vast liquidity across the whole global asset market. QuarrySwap can turn almost any asset, real or virtual, into a digital token to be owned, traded, transferred, or stored without the use of a central third-party or intermediary. QuarryChain’s QRY-20 smart contracts power QuarrySwap’s tokenization features and associated digital assets.";
    default:
      return "";
  }
}

export function handleSliderContentImage(step: number): string {
  switch (step) {
    case 1:
      return assetPaths.QUARRY_WALLET;
    case 2:
      return assetPaths.BLOCK_EXPLORER;
    case 3:
      return assetPaths.QUARRY_COIN_HEXAGON;
    case 4:
      return assetPaths.SWAP_HEXAGON;
    case 5:
      return assetPaths.ASSETS_SYMBOL_HEXAGON;
    default:
      return assetPaths.QUARRY_WALLET;
  }
}
