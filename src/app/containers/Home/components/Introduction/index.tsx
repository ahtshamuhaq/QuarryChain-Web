import {
  ButtonsContainer,
  Container,
  Content,
  SloganContainer,
  StyledButton,
  StyledSpan,
  TitleAndButtonsContainer,
  StyledTitle,
} from "./Introduction.styles";

export function Introduction() {

  function handleLaunchClick() {
    window.open('https://dapp.quarrychain.network/', '_blank')
  }

  return (
    <Container>
      <Content>
        <TitleAndButtonsContainer>
          <StyledTitle>
            Quarry <span className="font-black text-black">Chain</span>
          </StyledTitle>
          <SloganContainer>
            <StyledSpan>
              Advanced Blockchain Platform
            </StyledSpan>
          </SloganContainer>
          <ButtonsContainer>
            <StyledButton withMarginRight onClick={handleLaunchClick}>Launch App</StyledButton>
            <StyledButton secondaryStyledBtn variant="secondary">Learn More</StyledButton>
          </ButtonsContainer>
        </TitleAndButtonsContainer>
      </Content>
    </Container>
  );
}
