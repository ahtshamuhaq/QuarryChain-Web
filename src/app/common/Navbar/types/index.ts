import { MenuItemType } from "../components/NavigationList/components/Menu/types";

export type NavbarItem = {
  title: string;
  url?: string;
  menuItems?: MenuItemType[];
};
