import styled from "styled-components";
import media from "styled-media-query";
import { Icon } from "../../../../../Icon";
import { Span } from "../../../../../Typography/Span";

export const Container = styled.div<{ show?: boolean }>`
  min-width: 200px;
  display: none;
  position: absolute;
  transition: none;
  top: 75px;
  left: 0px;
  background: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[50]};
  padding: 16px;
  border-radius: 12px;
  user-select: none;

  ${media.between("medium", "large")`
    min-width: 140px;
  `};

  ${({ show }) =>
    show &&
    `
    display: flex;
    flex-direction: column;
    z-index: 2;
    transition: all 0.3s ease-in-out;

  `}
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;

  :hover {
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
  }

  :last-child {
    margin-bottom: 0px;
  }
`;

export const StyledSpan = styled(Span)`
  font-size: 18px;
  line-height: 18px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[400]};

  ${media.between("medium", "large")`
    font-size: 14px;
    line-height: 14px;
  `};
`;

export const SubMenuContainer = styled.div`
  width: 100%;
`;

export const SubMenuItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 8px;

  :not(:last-child) {
    margin-bottom: 16px;
  }

  :hover {
    opacity: 0.7;
  }
`;

export const SubMenuItemText = styled(Span)`
  font-size: 16px;
  line-height: 18px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[300]};
  ${media.between("medium", "large")`
    font-size: 13px;
    line-height: 14px;
  `};
`;

export const IconContainer = styled.div``;

export const SubMenuItemIcon = styled(Icon)`
  font-size: 16px;
  fill: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[200]};
  margin-left: 8px;
`;
