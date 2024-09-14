import { capitalize } from "../../../../../../../../common/utils/capitalize";
import { Container, StyledIcon } from "./SliderController.styles";
import { SliderControllerProps } from "./types";

export function SliderController({
  direction,
  handleClick,
}: SliderControllerProps) {
  return (
    <Container onClick={() => handleClick(direction)}>
      <StyledIcon name={`arrow${capitalize(direction)}`} />
    </Container>
  );
}
