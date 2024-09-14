import { SocialPlatforms } from "../../../../containers/Home/components/Footer/components/SocialPlatforms";
import { assetPaths } from "../../../constants";
import { TextLogo } from '../../../TextLogo';
import { navbarItems } from "../../constants";
import {
  Container,
  InvisibleDiv,
  LogosContainer,
  MainContent,
  MenuFooter,
  MenuWrapper,
  QuarrychainLogo,
  QuarrychainLogoContainer,
  QuarrychainTextLogoContainer,
} from "./HamburgerMenu.styles";
import { HamburgerNavbarItem } from "./HamburgerNavbarItem";
import { HamburgerMenuProps } from "./types";

export function HamburgerMenu({ hide }: HamburgerMenuProps) {
  return (
    <Container>
      <InvisibleDiv onClick={hide} />
      <MenuWrapper>
        <MainContent>
          <LogosContainer>
            <QuarrychainLogoContainer>
              <QuarrychainLogo src={assetPaths.LOGO} />
            </QuarrychainLogoContainer>
            <QuarrychainTextLogoContainer>
              <TextLogo />
            </QuarrychainTextLogoContainer>
          </LogosContainer>
          {navbarItems.map((navbarItem, index) => (
            <HamburgerNavbarItem
              item={navbarItem}
              hideMenu={hide}
              key={index++}
            />
          ))}
        </MainContent>
        <MenuFooter>
          <SocialPlatforms numberOfItems={4} noTitle invertColors smallSize />
        </MenuFooter>
      </MenuWrapper>
    </Container>
  );
}
