import React from "react";

interface UtilityCards {
  cardNo: string;
  cardTitle: string;
  cardText: string;
}

const UtilityCard: React.FC<UtilityCards> = ({
  cardNo,
  cardText,
  cardTitle,
}) => {
  return (
    <div className="flex flex-col w-full max-w-[300px] h-[300px] p-5 bg-[#FFFFFF] shadow-lg rounded-lg">
      <div className="flex flex-col items-center  justify-between">
        {/* Number Container */}
        <div className="w-[50px] h-[50px] rounded-full bg-[#1FC7D4] flex items-center justify-center">
          <h1 className="text-[#FFFFFF] text-xl">{cardNo}</h1>
        </div>
        {/* Text and Line Container */}
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[#252B42] text-[20px] mb-1 text-center">
            {cardTitle}
          </h2>
          <div className="w-10 h-[2px] bg-[#1FC7D4] mb-2"></div>
          <p className="text-[#737373] text-[12px] text-center">{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default UtilityCard;
