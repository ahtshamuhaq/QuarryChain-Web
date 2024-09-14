import React, { useState } from "react";

interface FAQContainerProps {
  FAQHeader: string;
  FAQText: string;
}

const FAQContainer: React.FC<FAQContainerProps> = ({ FAQHeader, FAQText }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="w-full text-left shadow-md">
      <div
        className={`px-5 flex justify-between items-center cursor-pointer transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-[#553499] to-[#000699] text-white h-[70px]"
            : "bg-white text-[#414141] h-[70px]"
        }`}
        onClick={handleToggle}
      >
        <h1 className="text-[20px] font-[400]">{FAQHeader}</h1>

        <button
          className={`text-[#414141] text-[30px] ${
            isOpen ? "hidden" : "block"
          }`}
        >
          +
        </button>
        <button
          className={`text-[#ffffff] text-[30px] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          −
        </button>
      </div>
      {isOpen && (
        <div className="bg-[#FFFFFF] border-[#D2D2D2] border-t-[2px] px-[30px] py-[20px]">
          <p className="text-[#222222] font-normal text-[16px]">{FAQText}</p>
        </div>
      )}
    </article>
  );
};

export default FAQContainer;
