import { Container, StepCircle } from "./SliderSelector.styles";
import { SliderSelectorProps } from "./types";

export function SliderSelector({ step, onSelectorClick }: SliderSelectorProps) {
  return (
    <Container>
      {[1, 2, 3, 4, 5].map((item) => (
        <StepCircle
          key={item}
          onClick={() => onSelectorClick(item)}
          isCurrent={step === item}
        />
      ))}
    </Container>
  );
}
