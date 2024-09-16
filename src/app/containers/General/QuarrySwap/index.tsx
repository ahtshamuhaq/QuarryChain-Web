import QuerryCard from "./components/QuerryCard";
import QuerryInfo from "./components/QuerryInfo";
import { querryData } from "./data/querrySwapData";

export function QuarrySwapDetails() {
  return (
    <>
      <div className="w-full h-[200px]  text-white lg:block">
        <h2 className="text-4xl  text-white ">Quarry Swap</h2>
        <h1 className="text-[60px] mt-10 text-center py-5 text-[#000AFF]">
          Quarry<span className="text-[#000000]">Swap</span>
        </h1>
      </div>
      <QuerryInfo />

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {querryData.map((card, index) => (
          <QuerryCard
            index={index}
            imgPath={card.imgPath}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </>
  );
}
