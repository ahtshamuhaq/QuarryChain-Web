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

export function TuffToken() {
  return (
    <Content>
      <Container>
        <MainText>
          <ContentTitle>What is Tuff Token?</ContentTitle>
          <ContentParagraph>
            TUFF tokens are a crucial component of the QuarryChain DeFi. This
            token is named after the volcanic rock known as “Tuff,”
            the type of rock that was used to create the Moai Statues. In the
            QuarryChain Network, its purpose is to take part in decentralized
            lending, insurance, liquidity, stable coins, etc. TUFF is completely
            initiated, driven, and developed by the TUFF community. All of TUFF's
            functionalities will be implemented by open-source smart contracts,
            and is wholly operated by the community. The functionalities are
            developed based on community initiatives. All proposals and decision
            making are voted via TUFF within the community--minority obeys
            majority. TUFF will be deployed on the Quarry Virtual Machine via a
            smart contract, becoming a nexus closely correlated with other
            existing DeFi projects.
          </ContentParagraph>
          <ContentParagraph>
            TUFF is a digital asset
            based on QRY20, the technical standard used for tokens within
            smart contracts on the QuarryChain blockchain. The total token supply is
            1,000,000,000,000,000.
          </ContentParagraph>
          <ContentParagraph>
            The distribution of TUFF is completely
            decentralized via mining based on the smart contract. The only way
            to mine TUFF is to stake QRY or QRY20 Tokens (including Liquidity
            Provider LP Tokens)
          </ContentParagraph>
        </MainText>
        <ImageContainer>
          <TokenLogo src={assetPaths.TUFF_TOKEN} />
        </ImageContainer>
      </Container>
    </Content>
  );
}
