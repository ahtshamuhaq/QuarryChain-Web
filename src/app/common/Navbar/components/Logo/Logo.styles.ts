import styled from "styled-components";
import { TextLogo } from '../../../TextLogo';
const isSafari = (window as any).safari || navigator.userAgent.match(/(iPod|iPhone|iPad)/) || navigator.userAgent.match(/AppleWebKit/);

export const LogoContainer = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 46px;

  ${isSafari && `
    width: auto;
    display: block;
  `}
`;

export const StyledTextLogo = styled(TextLogo)`
  margin-left: 13px;
`;