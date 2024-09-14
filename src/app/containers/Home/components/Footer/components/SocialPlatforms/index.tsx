import { StyledTitle } from "../../Footer.styles";
import { Container, SocialMediaIcons } from "./SocialPlatforms.styles";
import { SocialPlatformProps } from "./types";
import { socialPlatformItemsToShow } from "./utils";
import { assetPaths } from "../../../../../../common/constants";

export function SocialPlatforms({
  numberOfItems,
  noTitle,
  invertColors,
  smallSize,
}: SocialPlatformProps) {
  return (
    <Container>
      <div className="w-[250px] h-[100px] flex">
        <img className="w-full h-full" src={assetPaths.LOGO} alt="logo" />
        <h1 className="text-nowrap">Querry chain</h1>
      </div>
      <div className="w-[70%] mb-[2em]">
        <p className="text-[#444444] text-[20px] ">
          QuarryChain is an innovative blockchain network designed to
          revolutionize how developers create and deploy smart contracts and
          decentralized applications (DApps). Our platform offers an ecosystem of
          tools that empower users to freely own and store data at high speed, low
          cost, and with minimal environmental impact.
        </p>
      </div>
      <SocialMediaIcons smallSize={smallSize}>
        {socialPlatformItemsToShow(numberOfItems, invertColors, smallSize)}
      </SocialMediaIcons>
    </Container>
  );
}
