import React from "react";
import { GradientHeading } from "../RealWorldAssets.styles";

interface QuerryStepsCards {
  title: string;
  text: string;
  imgPath: string;
  isReverse: boolean;
}

const QuerryStepsCard: React.FC<QuerryStepsCards> = ({
  title,
  text,
  imgPath,
  isReverse,
}) => {
  return (
    <div
      className={`flex ${
        isReverse
          ? "flex-col-reverse lg:flex-row"
          : "flex-col-reverse lg:flex-row-reverse"
      } mt-10 shadow-lg border-b-[2px] rounded-[17px] w-full justify-center items-center`}
    >
      <div className="w-full lg:w-1/2 px-4 lg:px-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <GradientHeading>{title}</GradientHeading>
        <p className="text-base leading-relaxed mt-2">{text}</p>
      </div>
      <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#FFFFFF] to-[#8cdce2] flex justify-center items-center">
        <img className="w-3/4 " src={imgPath} alt={title} />
      </div>
    </div>
  );
};

export default QuerryStepsCard;
