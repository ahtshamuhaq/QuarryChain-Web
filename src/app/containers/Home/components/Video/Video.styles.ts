import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color:#C4FDEB;
  ${media.lessThan("large")`
   display: none;
  `}
`;
