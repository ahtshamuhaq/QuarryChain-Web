import { assetPaths } from "../../../../common/constants";
import {
  ButtonsContainer,
  Container,
  Content,
  ImageContainer,
  ImageContainerMobile,
  PolygonsImage,
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
            QuarryChain
          </StyledTitle>
          <SloganContainer>
            <StyledSpan>
              Advanced Blockchain Platform
            </StyledSpan>
          </SloganContainer>
          <ImageContainerMobile>
            <PolygonsImage src={assetPaths.POLYGONS} />
          </ImageContainerMobile>
          <ButtonsContainer>
            <StyledButton withMarginRight onClick={handleLaunchClick}>Launch App</StyledButton>
            <StyledButton variant="secondary">Learn More</StyledButton>
          </ButtonsContainer>
        </TitleAndButtonsContainer>
        <ImageContainer>
          <PolygonsImage src={assetPaths.POLYGONS} />
        </ImageContainer>
      </Content>
    </Container>
  );
}
