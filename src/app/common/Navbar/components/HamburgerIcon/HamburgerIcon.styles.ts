import styled from "styled-components";
import media from "styled-media-query";
import { Icon } from "../../../Icon";

export const Container = styled.div`
  display: none;

  ${media.lessThan("medium")`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`}
`;

export const StyledIcon = styled(Icon)`
  font-size: 25px;

  :hover {
    opacity: 0.7;
  }
`;
