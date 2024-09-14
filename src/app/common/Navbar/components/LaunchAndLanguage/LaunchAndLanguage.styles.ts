import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../../../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const ButtonContainer = styled.div`
  width: 200px;
  height: 55px;
  margin-right: 32px;

  ${media.between("medium", "large")`
    width: 120px;
    margin-right: 0px;
    height: 30px;
  `};
`;

export const StyledButton = styled(Button)`
  ${media.between("medium", "large")`
    font-size: 14px;
    line-height: 14px;
  `};
`;
