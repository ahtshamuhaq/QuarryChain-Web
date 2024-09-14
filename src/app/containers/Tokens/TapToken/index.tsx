import { assetPaths } from "../../../common/constants";
import { Content } from "../../../common/Content";
import {
  ContentTitle,
  ContentParagraph,
} from "../../../common/Content/Content.styles";
import {
  Container,
  ImageContainer,
  MainText,
  TokenLogo,
} from "../Tokens.styles";

export function TapToken() {
  return (
    <Content>
      <Container>
        <MainText>
          <ContentTitle>What is Tap Token?</ContentTitle>
          <ContentParagraph>
            QuarryChain's TAP token project is a basic-income cryptocurrency
            designed to create a more equitable distribution of water.
            The TAP token project uses an array of machine-learning algorithms
            to constantly recalculate the gallon value of a TAP token on a
            monthly basis and sustainably distribute these tokens to
            corporations and citizens alike.
          </ContentParagraph>
          <ContentParagraph>
            QuarryChain's TAP token aims to be a cap-and-trade program for water
            use (currently) in the United States of America. It is coupled with the
            advanced capabilities of the Quarry Virtual Machine (QVM) to predict
            future value and recommended strategic investments.
          </ContentParagraph>
          <ContentParagraph>
            The gallon-value of one tap token is constantly recalculated by a
            family of powerful, machine-learning algorithms (QVM), based on a
            comprehensive array of real-time data sets: meteorological, ground-water
            deposits, economic trends, consumption rates, and more. The
            token value is designed to create a generous proportion of water for
            all private citizens, but can be controlled more strategically in
            its corporate distribution.
          </ContentParagraph>
        </MainText>
        <ImageContainer>
          <TokenLogo src={assetPaths.TAP_TOKEN} />
        </ImageContainer>
      </Container>
    </Content>
  );
}
