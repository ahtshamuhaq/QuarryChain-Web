import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  align-items: center;
  ${media.lessThan("large")`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const MainText = styled.div`
  width: 70%;
  ${media.lessThan("large")`
    width: 100%;
  `}
`;

export const ImageContainer = styled.div`
  width: 276px;
  height: 276px;
  margin-left: 50px;
  ${media.lessThan("large")`
    margin-left: 0px;
  `}
`;

export const TokenLogo = styled.img`
  width: 100%;
  height: 100%;
`;
