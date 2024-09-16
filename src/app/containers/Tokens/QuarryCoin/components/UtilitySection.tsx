import React from "react";
import { GradientHeading } from "../QuarryCoin.styles";
import UtilityCard from "./UtilityCard";
import { querriesUtilities } from "../data/QuarryCoin";

const UtilitySection = () => {
  const mappedQuerryCards = querriesUtilities.map((data) => (
    <UtilityCard
      key={data.querryNo}
      cardNo={data.querryNo}
      cardTitle={data.querryTitle}
      cardText={data.querryText}
    />
  ));
  return (
    <div>
      <div className="text-center my-3">
        <GradientHeading>Utilities</GradientHeading>
      </div>
      <div className="w-full  flex flex-col md:flex-col lg:flex-row justify-center items-center gap-0 md:gap-0 lg:gap-10 my-10">
        {mappedQuerryCards}
      </div>
    </div>
  );
};

export default UtilitySection;
