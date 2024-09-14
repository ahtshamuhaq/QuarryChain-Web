import { useState } from "react";
import { SliderContent } from "./components/SliderContent";
import { SliderController } from "./components/SliderController";
import { SliderSelector } from "./components/SliderSelector";
import { Container, ControllersAndContent } from "./Slider.styles";

export function Slider() {
  const [stepNumber, setStepNumber] = useState<number>(1);
  function handleSelectorClick(position: number) {
    setStepNumber(position);
  }

  function handleControllerClick(direction: string) {
    if (direction === "right") {
      stepNumber === 5 ? setStepNumber(1) : setStepNumber(stepNumber + 1);
    } else {
      stepNumber === 1 ? setStepNumber(5) : setStepNumber(stepNumber - 1);
    }
  }


  return (
    <Container>
      <ControllersAndContent>
        <SliderController
          direction="left"
          handleClick={handleControllerClick}
        />
        <SliderContent step={stepNumber} />
        <SliderController
          direction="right"
          handleClick={handleControllerClick}
        />
      </ControllersAndContent>
      <SliderSelector step={stepNumber} onSelectorClick={handleSelectorClick} />
    </Container>
  );
}
