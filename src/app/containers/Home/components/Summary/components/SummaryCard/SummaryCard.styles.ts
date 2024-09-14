import styled from "styled-components";
import media from "styled-media-query";
import { Paragraph } from "../../../../../../common/Typography/Paragraph";
import { Title } from "../../../../../../common/Typography/Title";
import { assetPaths } from "../../../../../../common/constants";
const isSafari = (window as any).safari || navigator.userAgent.match(/(iPod|iPhone|iPad)/) || navigator.userAgent.match(/AppleWebKit/);

export const Container = styled.div`
  background-image: url(${assetPaths.CARD_PATTERN});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  max-width: 420px;
  position: relative;

  ${media.between("large", "huge")`
    max-width: 300px;
  `};

  ${media.between("medium", "large")`
    max-width: 200px;
  `};

  ${media.lessThan("medium")`
    margin-bottom: 20px;
    max-width: none;
  `};
`;

export const Content = styled.div`
  min-height: 270px;
  display: flex;
  flex-direction: column;
  padding: 22px 30px;
  box-shadow: 4px 8px 30px 0px rgba(0, 0, 0, 0.2);
  background ${({
  theme: {
    colors: { neutral },
  },
}) => neutral[0]};

  ${media.lessThan("large")`
    min-height: 230px;
    height: 400px;
  `}

  ${media.lessThan("medium")`
    min-height: 230px;
    height: 250px;
  `}
`;

export const StyledTitle = styled(Title)`
  font-size: 32px;
  line-height: 41px;
  margin-bottom: 8px;

  ${media.lessThan("huge")`
    font-size: 25px;
  `}
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  line-height: 18px;
  color: ${({
  theme: {
    colors: { secondary },
  },
}) => secondary[0]};

  ${media.lessThan("huge")`
    font-size: 15px;
  `}
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 150px;
  bottom: -100px;
  left: 140px;
  ${isSafari && `
      width: 153px;
  `}

  ${media.lessThan("large")`
    height: 50px;
    ${isSafari && `
      width: 50px;
    `}
  `}

  ${media.between("large", "huge")`
    left: 80px;
  `};
  
  ${media.between("medium", "large")`
    left: auto;
    bottom: auto;
    right: 8px;
    top: 10px;
  `};

  ${media.lessThan("medium")`
    left: auto;
    bottom: auto;
    right: 8px;
    top: 18px;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
