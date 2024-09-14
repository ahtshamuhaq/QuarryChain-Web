import styled from "styled-components";
import { Icon } from "../../../../Icon";
import { Span } from "../../../../Typography/Span";

export const Container = styled.div`
  width: 90%;
  padding: 10px 0px;
  border-bottom: 1px solid
    ${({
      theme: {
        colors: { neutral },
      },
    }) => neutral[100]};
  margin-bottom: 15px;
`;

export const TextAndArrowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  :hover {
    opacity: 0.7;
  }
`;

export const ItemText = styled(Span)`
  font-size: 15px;
  line-height: 17px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[400]};
`;

export const ArrowIcon = styled(Icon)`
  font-size: 15px;
  fill: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[200]};
  margin-left: 8px;
`;

export const MenuItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const MenuItem = styled.div`
  width: 100%;
  padding: 0px 10px;
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const MenuItemText = styled(Span)`
  font-size: 15px;
  line-height: 17px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[300]};
`;

export const SubMenuItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding: 0px 10px;
`;

export const SubMenuItem = styled.div`
  width: 100%;
  cursor: pointer;
  user-select: none;
  margin-bottom: 10px;

  :hover {
    opacity: 0.7;
  }
`;

export const SubItemMenuText = styled(Span)`
  font-size: 15px;
  line-height: 17px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[200]};
`;
