import React from "react";

interface QuerryCards {
  index: number;
  imgPath: string;
  heading: string;
  text: string;
}

const QuerryCard: React.FC<QuerryCards> = ({
  index,
  imgPath,
  heading,
  text,
}) => {
  return (
    <div key={index} className="bg-white rounded-lg shadow-lg  text-center">
      <div className="bg-[#6FCFD7] rounded-t-lg flex items-center justify-center h-28 p-0">
        <img src={imgPath} alt={heading} className="w-24 h-24 mx-auto " />
      </div>
      <div className="p-6">
        <h3 className=" text-lg font-bold text-gray-800">{heading}</h3>
        <p className=" mt-2 text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default QuerryCard;
