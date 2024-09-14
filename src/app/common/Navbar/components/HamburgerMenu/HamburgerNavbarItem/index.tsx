import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarItem } from "../../../types";
import { MenuItemType } from "../../NavigationList/components/Menu/types";
import {
  ArrowIcon,
  Container,
  MenuItemsContainer,
  MenuItem,
  MenuItemText,
  ItemText,
  SubItemMenuText,
  SubMenuItemsContainer,
  TextAndArrowContainer,
  SubMenuItem,
} from "./HamburgerNavbarItem.styles";
import { HamburgerNavbarItemProps } from "./types";

export function HamburgerNavbarItem({
  item,
  hideMenu,
}: HamburgerNavbarItemProps) {
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);
  const [showSubMenuItems, setShowSubMenuItems] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleNavbarItemClick(item: NavbarItem) {
    if (item.menuItems?.length) {
      setShowMenuItems(!showMenuItems);
    }
  }

  function handleMenuItemClick(item: MenuItemType) {
    if (item?.subMenuItems?.length) {
      setShowSubMenuItems(!showSubMenuItems);
    } else {
      if (item?.url.includes("drive")) {
        window.open(item?.url, "_blank");
      } else {
        navigate(item.url || "/", { replace: true });
      }
      hideMenu();
    }
  }

  return (
    <Container>
      <TextAndArrowContainer onClick={() => handleNavbarItemClick(item)}>
        <ItemText>{item.title}</ItemText>
        <ArrowIcon name={showMenuItems ? "arrowUp" : "arrowDown"} />
      </TextAndArrowContainer>
      {showMenuItems && (
        <MenuItemsContainer>
          {item.menuItems?.map((menuItem, menuItemIndex) => (
            <MenuItem
              onClick={() => handleMenuItemClick(menuItem)}
              key={menuItemIndex++}
            >
              <TextAndArrowContainer>
                <MenuItemText>{menuItem.name}</MenuItemText>
                {!!menuItem?.subMenuItems?.length && (
                  <ArrowIcon
                    name={showSubMenuItems ? "arrowUp" : "arrowDown"}
                  />
                )}
              </TextAndArrowContainer>
              {showSubMenuItems && !!menuItem?.subMenuItems?.length && (
                <SubMenuItemsContainer>
                  {menuItem.subMenuItems.map(
                    (subMenuItem, subMenuItemIndex) => (
                      <SubMenuItem
                        onClick={() => handleMenuItemClick(subMenuItem)}
                        key={subMenuItemIndex++}
                      >
                        <SubItemMenuText>{subMenuItem.name}</SubItemMenuText>
                      </SubMenuItem>
                    )
                  )}
                </SubMenuItemsContainer>
              )}
            </MenuItem>
          ))}
        </MenuItemsContainer>
      )}
    </Container>
  );
}
