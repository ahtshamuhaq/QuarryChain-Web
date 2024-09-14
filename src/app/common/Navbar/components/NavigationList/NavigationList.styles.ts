import styled from "styled-components";
import media from "styled-media-query";

export const NavigationListContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;

  ${media.lessThan("medium")`
    display: none;
  `}

  ${media.between("medium", "huge")`
    padding: 0 10px;
    width: 65%;
    justify-content: center;
  `};
`;
