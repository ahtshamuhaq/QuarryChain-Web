import { MenuItemType } from "../../Menu/types";

export type NavigationItemProps = {
  title: string;
  url: string;
  menuItems?: MenuItemType[];
};
