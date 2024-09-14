import {
  ButtonContainer,
  Container,
  StyledButton,
} from "./LaunchAndLanguage.styles";

export function LaunchAndLanguage() {
  function handleLaunchClick() {
    window.open('https://dapp.quarrychain.network/', '_blank')
  }

  return (
    <Container>
      <ButtonContainer>
        <StyledButton onClick={handleLaunchClick}>Launch App</StyledButton>
      </ButtonContainer>
    </Container>
  );
}
