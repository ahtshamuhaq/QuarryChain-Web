import React from "react";

interface RealWorldCard {
  image: string;
  title: string;
  lists: string[];
}

const RealWorldCard: React.FC<RealWorldCard> = ({ image, title, lists }) => {
  return (
    <div className="flex flex-col w-full h-[480px]  max-w-[430px] p-4  rounded-lg text-[#000000] text-left">
      <div className="w-[100px] h-[100px] object-contain mx-auto mb-4">
        <img className="w-full h-full " src={image} alt={title} />
      </div>
      <div className="mb-2">
        <h1 className="text-lg sm:text-xl md:text-lg lg:text-lg font-semibold">
          {title}
        </h1>
      </div>
      <div>
        <ul className="text-sm sm:text-base md:text-base lg:text-base text-[#000000] list-disc list-inside">
          {lists.map((list) => (
            <li className="mb-1" key={list}>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RealWorldCard;
