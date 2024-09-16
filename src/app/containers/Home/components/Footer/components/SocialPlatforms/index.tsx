import { Container, SocialMediaIcons } from "./SocialPlatforms.styles";
import { SocialPlatformProps } from "./types";
import { socialPlatformItemsToShow } from "./utils";

export function SocialPlatforms({
  numberOfItems,
  noTitle,
  invertColors,
  smallSize,
}: SocialPlatformProps) {
  return (
    <Container className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
      {/* Logo Section */}

      {/* Text Section */}
      <div className="w-full md:w-2/4 mb-4 md:mb-0 md:px-4">
        <p className="text-[#444444] text-[16px] md:text-[20px] leading-relaxed">
          QuarryChain is an innovative blockchain network designed to
          revolutionize how developers create and deploy smart contracts and
          decentralized applications (DApps). Our platform offers an ecosystem
          of tools that empower users to freely own and store data at high
          speed, low cost, and with minimal environmental impact.
        </p>
      </div>

      {/* Social Media Icons Section */}
      <SocialMediaIcons
        className="w-full md:w-1/4 flex justify-center md:justify-end"
        smallSize={smallSize}
      >
        {socialPlatformItemsToShow(numberOfItems, invertColors, smallSize)}
      </SocialMediaIcons>
    </Container>
  );
}
