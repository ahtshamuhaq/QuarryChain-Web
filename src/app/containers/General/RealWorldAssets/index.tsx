import { assetPaths } from "../../../common/constants";
import RealWorldCard from "./components/RealWorldCard";
import QuerryCard from "./components/QuerryCard";
import QuerryStepsCard from "./components/QuerryStepsCard";
import {
  realWorldAssetsData,
  approchQuerrySteps,
} from "./data/realWorldAssetsData";
import { Content } from "../../../common/Content";

export function RealWorldAssets() {
  const realWorldMappedData = realWorldAssetsData.map((assets) => (
    <RealWorldCard
      image={assets.imgPath}
      title={assets.title}
      lists={assets.list}
    />
  ));

  const approchQuerryMappedSteps = approchQuerrySteps.map((steps) => (
    <QuerryStepsCard
      imgPath={steps.image}
      title={steps.title}
      text={steps.text}
      isReverse={steps.isReverse}
    />
  ));
  return (
    <>
      <Content>
        <div className="flex w-full text-center bg-gradient-to-b from-[#9C37FD] to-[#FFFFFF] flex-col justify-center items-center">
          <div>
            <h1 className=" py-6 text-[#553499] text-[40px]">
              Tokenization of Real World Assets
            </h1>
          </div>
          <div className="w-full max-w-2xl">
            <img src={assetPaths.REAL_WORLD_ASSETS} alt="real world assets" />
          </div>
          <div className="w-1/2">
            <p className="text-[#000000] font-[400] text-[17px] leading-[50px]">
              QuarryChain enables tokenization of assets in a variety of
              industries to create vast liquidity across the whole global asset
              market. QuarrySwap can turn almost any asset, real or virtual,
              into a digital token to be owned, traded, transferred, or stored
              without the use of a central third-party or intermediary.
              QuarryChain’s Native Smart Contracts power QuarrySwap’s
              tokenization features and associated digital assets.
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-5 md:gap-10 sm:gap-10">
          {realWorldMappedData}
        </div>
      </Content>

      <QuerryCard />
      <div className="flex flex-col w-full  mx-auto justify-center items-center mb-10 mt-10">
        {approchQuerryMappedSteps}
      </div>
    </>
  );
}
