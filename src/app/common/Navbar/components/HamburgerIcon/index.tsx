import { Container, StyledIcon } from "./HamburgerIcon.styles";
import { HamburgerIconProps } from "./types";

export function HamburgerIcon({ onClick }: HamburgerIconProps) {
  return (
    <Container onClick={onClick}>
      <StyledIcon name="hamburger" />
    </Container>
  );
}
