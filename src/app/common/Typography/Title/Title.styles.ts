import styled from "styled-components";
import media from "styled-media-query";

export const TitleComponent = styled.h2`
  font-size: 64px;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[100]};
  font-weight: 500;
  line-height: 83px;

  ${media.lessThan("medium")`
    font-size: 44px;
    line-height: 50px;
  `}
`;
