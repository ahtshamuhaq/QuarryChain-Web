import React from "react";
import { assetPaths } from "../../../../common/constants";

const QuerryInfo = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="w-[200px] h-[200px]">
        <img
          className="mx-auto w-full h-full object-contain"
          src={assetPaths.QUERRY_SWAP_LOGO}
          alt="querry swap"
        />
      </div>
      <div className="w-full max-w-7xl">
        <li className="text-[16px] px-[10px] lg:px-0 lg:text-[22px] leading-[50px] text-[#5B5B5B]">
          QuarrySwap is a decentralized exchange (DEX, for short), and one of
          QuarryChain's first Applications. QuarrySwap also happens to be
          non-custodial, meaning that unlike centralized exchanges, QuarrySwap
          does not need to possess your tokens in order for you to be able to
          trade them. QuarrySwap allows users to safely and securely stake a
          variety of cryptocurrencies and tokenized real world assets.
        </li>
      </div>
    </div>
  );
};

export default QuerryInfo;
