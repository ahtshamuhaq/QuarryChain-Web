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

export function MoaiToken() {
  return (
    <Content>
      <Container>
        <MainText>
          <ContentTitle>What is Moai Token?</ContentTitle>
          <ContentParagraph>
            Moai is a community-driven organization built to solve the “liquidity problem.” One could define this problem as the inability of disparate forms of liquidity to connect with markets in a decentralized way and vice versa. While other solutions will provide incrementally progressive advances toward solving the problem of liquidity, Moai’s progress is intended to create a broader range of network effects. Rather than limiting itself to a single solution, Moai intertwines many decentralized markets and instruments.
          </ContentParagraph>
          <ContentParagraph>
            The Core Applications of QuarryChain include a decentralized
            exchange, a decentralized lending market, yield instruments, and
            staking derivatives. QuarryChain's applications are configured in a
            way that allow the entire platform to maintain decentralized
            governance by MOAI token holders, while continuing to innovate on
            the collective foundations by design. Whereas major structural
            changes are voted on by the community, the day-to-day operations,
            rebalancing of pools and ratios, business strategy, and overall
            development is ultimately decided by the QuarryChain development
            team.
          </ContentParagraph>
        </MainText>
        <ImageContainer>
          <TokenLogo src={assetPaths.MOAI_TOKEN} />
        </ImageContainer>
      </Container>
    </Content>
  );
}
