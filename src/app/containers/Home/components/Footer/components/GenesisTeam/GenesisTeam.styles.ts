import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  ${media.between("medium", "large")`
    margin-left: 25px;
  `};

  ${media.lessThan("medium")`
    width: 100%;
    margin-top: 20px;
  `}
`;
