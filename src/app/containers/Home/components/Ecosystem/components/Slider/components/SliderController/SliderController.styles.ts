import styled from "styled-components";
import media from "styled-media-query";
import { Icon } from "../../../../../../../../common/Icon";

export const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[0]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 4px 8px 30px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
  }

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const StyledIcon = styled(Icon)`
  font-size: 50px !important;
  fill: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[200]} !important;
`;
