import React from "react";
import { assetPaths } from "../../../../common/constants";
import { GradientHeading } from "../QuarryCoin.styles";

const QuerryCoinHeader = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div>
        <div className="mx-auto w-40 h-[3px] bg-[#D9D9D9]"></div>
        <div>
          <GradientHeading>Quarychain ecosystem</GradientHeading>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-col lg:flex-row lg:justify-between items-center p-4">
        <div className="flex-1 lg:mr-4 mb-4 lg:mb-0">
          <h2 className="text-[#553499] text-[40px]">Quary Coin</h2>
        </div>

        <div className="w-40 h-40 flex-shrink-0">
          <img
            className="w-full h-full object-contain"
            src={assetPaths.QUARRY_IMAGE}
            alt="Quary Coin"
          />
        </div>
      </div>
      <div className="text-left mt-10">
        <li className="list-disc text-[#5B5B5B] text-[22px] leading-[30px]">
          Quarry Coin is the official cryptocurrency and utility token for the
          QuarryChain Network. Quarry aims to be a peer-to-peer digital currency
          that will enable lightning fast low cost transactions to anyone in the
          world. Quarry will also be used to access and connect the entire
          QuarryChain Ecosystem, with an abundance of application scenarios that
          power transactions and applications on the chain
        </li>
      </div>
    </div>
  );
};

export default QuerryCoinHeader;
