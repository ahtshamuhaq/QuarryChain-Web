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
    <div className="bg-gradient-to-r from-[#D9D9D9] to-[#1FC7D4] w-full py-[30px]">
      <div className="text-center my-3">
        <GradientHeading>Benifits</GradientHeading>
      </div>
      <div className="flex flex-col gap-0 md:gap-0 lg:gap-10 md:flex-col lg:flex-row justify-evenly items-center">
        {mappedBenifitsData}
      </div>
    </div>
  );
};

export default BenifitTextContainer;
