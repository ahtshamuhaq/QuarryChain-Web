import { useNavigate } from "react-router-dom";
import { StyledSpan, StyledTitle, TextContainer } from "../../Footer.styles";
import { Container } from "./Support.styles";

export function Support() {
  const navigate = useNavigate();

  return (
    <Container>
      <StyledTitle>Support</StyledTitle>
      <TextContainer
        onClick={() => navigate("/faq", { replace: true })}
        withHover
      >
        <StyledSpan>FAQ</StyledSpan>
      </TextContainer>
      <TextContainer>
        <StyledSpan>Contact us</StyledSpan>
      </TextContainer>
      <TextContainer>
        <StyledSpan darker>quarrychain@gmail.com</StyledSpan>
      </TextContainer>
    </Container>
  );
}
