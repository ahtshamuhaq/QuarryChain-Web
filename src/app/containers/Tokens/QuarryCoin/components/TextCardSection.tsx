import React from "react";
import TextCard from "./TextCard";
import { GradientHeading } from "../QuarryCoin.styles";
import { bennifitData } from "../data/QuarryCoin";

const BenifitTextContainer = () => {
  const mappedBenifitsData = bennifitData.map((data) => (
    <TextCard
      key={data.title}
      borderP={data.border_p}
      title={data.title}
      text={data.text}
    />
  ));

  return (
    <div className="bg-gradient-to-r from-[#D9D9D9] to-[#1FC7D4] w-full py-8 px-4 sm:px-8 lg:px-12">
      <div className="text-center mb-6">
        <GradientHeading>Benefits</GradientHeading>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-evenly lg:gap-10 items-center">
        {mappedBenifitsData}
      </div>
    </div>
  );
};

export default BenifitTextContainer;
