import { NavigationListContainer } from "./NavigationList.styles";
import { NavigationItem } from "./components/NavigationItem";
import { navbarItems } from "../../constants";

export function NavigationList() {
  return (
    <NavigationListContainer>
      {navbarItems.map((item, index) => (
        <NavigationItem
          title={item.title}
          url={item.url}
          key={index++}
          menuItems={item.menuItems}
        />
      ))}
    </NavigationListContainer>
  );
}
