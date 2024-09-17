import styled from "styled-components";
import media from "styled-media-query";
import { assetPaths } from "../../../../common/constants";
export const Container = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${assetPaths.TURQUOISE_BACKGROUND});
      background-repeat: no-repeat;
  background-position: center;

  ${media.lessThan("large")`
   display: none;
  `}
`;
