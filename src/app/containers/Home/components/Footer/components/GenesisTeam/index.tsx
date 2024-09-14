import { StyledSpan, StyledTitle, TextContainer } from "../../Footer.styles";
import { Container } from "./GenesisTeam.styles";

export function GenesisTeam() {
  function handleLinkClick() {
    window.open(
      "https://www.linkedin.com/in/alec-arrambide-91a7b321a/",
      "_blank"
    );
  }

  return (
    <Container>
      <StyledTitle>Genesis Team</StyledTitle>
      <TextContainer withHover onClick={() => handleLinkClick()}>
        <StyledSpan>Alec Arrambide - CEO/ Founder</StyledSpan>
      </TextContainer>
    </Container>
  );
}
