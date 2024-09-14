export type MenuProps = {
  items: MenuItemType[];
  show?: boolean;
  setMenuHeight?: (height?: number) => void;
  showSubMenu?: boolean;
  handleMenuItemClick?: (menuItem: MenuItemType) => void;
};

export type MenuItemType = {
  name: string;
  url?: string;
  subMenuItems?: MenuItemType[];
};
