import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../../../../common/Button";
import { assetPaths } from "../../../../common/constants";
import { Span } from "../../../../common/Typography/Span";
import { Title } from "../../../../common/Typography/Title";
const isSafari = (window as any).safari || navigator.userAgent.match(/(iPod|iPhone|iPad)/) || navigator.userAgent.match(/AppleWebKit/);

export const Container = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  padding-top: 80px;

  ${media.between("medium", "large")`
    height: ${isSafari ? "75%" : "50%"};
  `}

  ${media.lessThan("medium")`
    padding: 20px 0px;
    height: auto;
  `};
`;

export const Content = styled.div`
  width: 74%;
  height: 80%;
  display: flex;

  ${media.between("medium", "large")`
    width: 80%;
    justify-content: space-between;
    align-items: center;
  `}

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const TitleAndButtonsContainer = styled.div`
  width: 100%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan("medium")`
    max-width: none;
    height: 100%;
    text-align: center;
  `}

  ${media.between("medium", "large")`
    width: 50%;
    align-self: center;
  `}
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SloganContainer = styled.div`
  width: 100%;
  margin: 8px 0px 32px 0px;

  ${media.lessThan("medium")`
    margin: 12px 0px;
  `}
`;

export const StyledTitle = styled(Title)`
  align-self: flex-start;
  font-size: 4em;
  line-height: 108px;
  letter-spacing: 0.3555em;
  font-weight: 600;

  ${media.lessThan("huge")`
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.2555em;
  `}

  ${media.lessThan("medium")`
    align-self: center;
    font-size: 2em;
    line-height: 36px;
    letter-spacing: 0.15em;
  `}
`;

export const StyledSpan = styled(Span)`
  color: ${({
  theme: {
    colors: { neutral },
  },
}) => neutral[200]};
  font-size: 32px;
  line-height: 51px;
  font-weight: 400px;
  letter-spacing: 0.275em;

  ${media.lessThan("huge")`
   font-size: 20px;
   line-height: 20px;
   letter-spacing: 0.08em;
  `}

  ${media.lessThan("medium")`
   font-size: 18px;
   line-height: 18px;
   letter-spacing: 0.02em;
  `}
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;

  ${media.lessThan("medium")`
   margin-top: auto;
   justify-content: center;
  `}
`;

export const StyledButton = styled(Button) <{ withMarginRight?: boolean }>`
  max-width: 200px;

  ${({ withMarginRight }) =>
    withMarginRight &&
    `
  margin-right: 24px;
  `}
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 610px;
  height: 400px;

  ${media.lessThan("medium")`
    display: none;
  `}

  ${media.lessThan("huge")`
    width: 43%;
  `}
`;

export const PolygonsImage = styled.img`
  width: 100%;
  animation: MoveUpDown 4s linear infinite;
  position: absolute;

  @keyframes MoveUpDown {
    0%,
    100% {
      top: 0;
    }
    50% {
      top: 65px;
    }
  }

  ${media.lessThan("medium")`
    animation: none;
    position: static;
  `}
`;

export const ImageContainerMobile = styled.div`
  display: none;
  width: 280px;
  margin-bottom: 20px;

  ${media.lessThan("medium")`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
