import React from "react";

interface RealWorldCards {
  image: string;
  title: string;
  lists: string[];
}

const RealWorldCard: React.FC<RealWorldCards> = ({ image, title, lists }) => {
  return (
    <div className="flex flex-col w-full h-[480px]  max-w-[430px] p-4  rounded-lg text-[#000000] text-left">
      <div className=" object-contain mx-auto mb-4">
        <img className="w-full h-full " src={image} alt={title} />
      </div>
      <div className="mb-2">
        <h1 className="text-lg sm:text-xl md:text-lg lg:text-lg font-semibold">
          {title}
        </h1>
      </div>
      <div>
        <ul className="text-sm sm:text-base md:text-base font-normal lg:text-base text-[#292929d1] list-disc list-inside">
          {lists.map((list) => (
            <li className="mb-1 font-light" key={list}>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RealWorldCard;
