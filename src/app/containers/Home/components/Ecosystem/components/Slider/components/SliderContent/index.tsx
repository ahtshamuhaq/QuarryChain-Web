import {
  handleSliderContentDescription,
  handleSliderContentImage,
  handleSliderContentTitle,
} from "../../utils";
import {
  Container,
  TitleAndDescriptionContainer,
  StyledTitle,
  Description,
  HexagonImageContainer,
  HexagonImage,
} from "./SliderContent.styles";
import { SliderContentProps } from "./types";

export function SliderContent({ step }: SliderContentProps) {
  return (
    <Container step={step}>
      <TitleAndDescriptionContainer>
        <StyledTitle>{handleSliderContentTitle(step)}</StyledTitle>
        <Description>{handleSliderContentDescription(step)}</Description>
      </TitleAndDescriptionContainer>
      <HexagonImageContainer>
        <HexagonImage src={handleSliderContentImage(step)} />
      </HexagonImageContainer>
    </Container>
  );
}
