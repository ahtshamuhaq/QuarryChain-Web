import React from "react";
import {
  GradientBorderCard,
  CardContent,
} from "../QuarryCoin.styles";
import { assetPaths } from "../../../../common/constants";

interface TextCard {
  title: string;
  text: string;
  borderP:string;
}

const TextCard: React.FC<TextCard> = ({ title, text ,borderP}) => {
  let bg_position = ""
  let bg_image = ""
  if(borderP==="left"){
    bg_position="left"
    bg_image = assetPaths.BORDER_G_LEFT
  }
  else if(borderP==="bottom"){
    bg_position="left"
    bg_image = assetPaths.BORDER_G_BOTTOM
  }
  else{
    bg_position="right"
    bg_image = assetPaths.BORDER_G_RIGHT
  }
  return (
    <div style={{backgroundImage: `url(${bg_image})`, backgroundPosition:`${bg_position}`, backgroundRepeat:"no-repeat"}} className="bg-[#FFFFFF] w-1/4 px-[15px] py-[20px] shadow-md h-[200px] text-center rounded-[16px] flex justify-center items-center">
      <GradientBorderCard>
        <CardContent>
          <h1 className="text-[#1FC7D4] text-[20px]">{title}</h1>
          <p className="text-[#393939] text-[12px]">{text}</p>
        </CardContent>
      </GradientBorderCard>
    </div>
  );
};

export default TextCard;
