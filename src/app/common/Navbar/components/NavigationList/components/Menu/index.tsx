import { Fragment, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ItemContainer,
  StyledSpan,
  SubMenuContainer,
  SubMenuItem,
  SubMenuItemIcon,
  SubMenuItemText,
} from "./Menu.styles";
import { MenuProps } from "./types";

export function Menu({
  items,
  show,
  setMenuHeight,
  showSubMenu,
  handleMenuItemClick,
}: MenuProps) {
  const reference = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      setMenuHeight(reference?.current?.clientHeight + 80);
    }
  }, [show, setMenuHeight]);

  return (
    <Container show={show} ref={reference}>
      {items.map((item, index) => (
        <Fragment key={index}>
          <ItemContainer onClick={() => handleMenuItemClick(item)}>
            <StyledSpan>{item.name}</StyledSpan>
            {!!item?.subMenuItems?.length && (
              <SubMenuItemIcon name={showSubMenu ? "arrowUp" : "arrowDown"} />
            )}
          </ItemContainer>
          {showSubMenu && (
            <SubMenuContainer>
              {item?.subMenuItems?.map((subMenuItem, subMenuItemIndex) => (
                <SubMenuItem
                  key={subMenuItemIndex++}
                  onClick={() =>
                    subMenuItem.url &&
                    navigate(subMenuItem.url, { replace: true })
                  }
                >
                  <SubMenuItemText>{subMenuItem.name}</SubMenuItemText>
                </SubMenuItem>
              ))}
            </SubMenuContainer>
          )}
        </Fragment>
      ))}
    </Container>
  );
}
