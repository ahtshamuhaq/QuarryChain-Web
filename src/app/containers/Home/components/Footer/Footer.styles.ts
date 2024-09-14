import styled from "styled-components";
import media from "styled-media-query";
import { Span } from "../../../../common/Typography/Span";
import { Title } from "../../../../common/Typography/Title";
import { assetPaths } from "../../../../common/constants";

export const Container = styled.footer`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${assetPaths.FOOTER_BG});
  opacity:1.8;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[200]};

  ${media.lessThan("large")`
    height: auto;
    padding: 20px 0px;
  `}
`;


export const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  ${media.between("medium", "huge")`
    width: 80%;
  `};

  ${media.lessThan("medium")`
    width: 75%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const StyledTitle = styled(Title)`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 24px;
  color: ${({
  theme: {
    colors: { secondary },
  },
}) => secondary[50]};

  ${media.between("medium", "huge")`
    font-size: 20px;
    line-height: 20px;
  `};
`;

export const TextContainer = styled.div<{ withHover?: boolean }>`
  margin-bottom: 8px;
  ${({ withHover }) =>
    withHover &&
    `
    cursor: pointer;
    user-select: none;
    :hover {
      opacity: 0.7;
    }
  `}
`;

export const StyledSpan = styled(Span) <{ darker?: boolean }>`
  font-size: 20px;
  line-height: 25px;
  color: ${({
  theme: {
    colors: { neutral },
  },
}) => neutral[25]};

  ${({
  theme: {
    colors: { neutral },
  },
  darker,
}) =>
    darker &&
    `
    color: ${neutral[200]};
  `}

  ${media.between("medium", "huge")`
    font-size: 15px;
    line-height: 15px;
  `};
`;
