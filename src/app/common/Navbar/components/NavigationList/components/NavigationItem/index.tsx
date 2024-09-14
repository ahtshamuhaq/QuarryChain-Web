import { useEffect, useState } from "react";
import {
  InvisibleDiv,
  NavigationItemContainer,
  StyledSpan,
} from "./NavigationItem.styles";
import { NavigationItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { Menu } from "../Menu";
import { MenuItemType } from "../Menu/types";
import { assetPaths } from "../../../../../constants";

export function NavigationItem({ title, url, menuItems }: NavigationItemProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuHeight, setMenuHeight] = useState<number>(null);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showMenu) {
      setMenuHeight(null);
      setShowSubMenu(false);
    }
  }, [showMenu]);

  function handleItemClick() {
    setShowMenu(!showMenu);
  }

  function handleMenuItemClick(menuItem: MenuItemType) {
    if (menuItem?.subMenuItems?.length) {
      setShowSubMenu(!showSubMenu);
    } else {
      if (menuItem?.url.includes("https")) {
        window.open(menuItem?.url, "_blank");
      } else {
        navigate(menuItem.url || "/", { replace: true });
      }
    }
  }
  return (
    <NavigationItemContainer>
      <StyledSpan onClick={() => handleItemClick()}>
        {title}{" "}
        <span className="ml-[3px] mt-1 w-[10px] h-[10px]">
          <img
            className=""
            src={assetPaths.NAV_ICON}
            alt="nav icon"
          />
        </span>
      </StyledSpan>

      <InvisibleDiv
        onMouseLeave={() => showMenu && setShowMenu(false)}
        height={menuHeight}
      >
        {!!menuItems?.length && (
          <Menu
            items={menuItems}
            show={showMenu}
            setMenuHeight={setMenuHeight}
            handleMenuItemClick={handleMenuItemClick}
            showSubMenu={showSubMenu}
          />
        )}
      </InvisibleDiv>
    </NavigationItemContainer>
  );
}
