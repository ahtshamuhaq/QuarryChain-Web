import React from "react";
import { assetPaths } from "../../../../../common/constants";

import { Container, StyledSpan, Text } from "../Footer.styles";

const socialMediaLinks = [
  {
    href: "https://t.me/QuarrychainGroup",
    icon: (
      <img
        src={assetPaths.TELEGRAM_ICON}
        alt="Twitter"
        className="w-8 h-8 object-contain"
      />
    ),
    alt: "Telegram",
  },
  {
    href: "https://www.linkedin.com/company/quarrychain",
    icon: (
      <img
        src={assetPaths.LINKEDIN_ICON}
        alt="Twitter"
        className="w-8 h-8 object-contain"
      />
    ),
    alt: "LinkedIn",
  },
  {
    href: "https://discord.gg/7cZxWJpCyW",
    icon: (
      <img
        src={assetPaths.DISCORD_ICON}
        alt="Twitter"
        className="w-8 h-8 object-contain"
      />
    ),
    alt: "Discord",
  },
  {
    href: "https://twitter.com/QuarrychainLLC",
    icon: (
      <img
        src={assetPaths.X_ICON}
        alt="Twitter"
        className="w-8 h-8 object-contain"
      />
    ),
    alt: "Twitter",
  },
  {
    href: "https://www.youtube.com/channel/UCy_08G1sh3ioVplrNQkQ_xQ/featured",
    icon: (
      <img
        src={assetPaths.YOUTUBE_ICON}
        alt="Twitter"
        className="w-8 h-8 object-contain"
      />
    ),
    alt: "YouTube",
  },
  {
    href: "https://www.reddit.com/r/Quarrychain/",
    icon: (
      <img
        src={assetPaths.REGEDIT_ICON}
        alt="Twitter"
        className="w-8 h-8 object-contain"
      />
    ),
    alt: "Reddit",
  },
  {
    href: "https://www.instagram.com/quarrychain/",
    icon: (
      <img
        src={assetPaths.INSTAGRAM_ICON}
        alt="Twitter"
        className="w-8 h-8 object-contain"
      />
    ),
    alt: "Instagram",
  },
];
type TextLogoProps = {
  className?: string;
};
const FooterInfo = ({ className }: TextLogoProps) => {
  return (
    <div className="text-center md:text-left mb-6 md:mb-0">
      <div className="flex items-center justify-center md:justify-start space-x-4">
        <img
          className="w-16 h-16 object-contain"
          src={assetPaths.LOGO}
          alt="QuarryChain Logo"
        />
        <Container className={className}>
          <Text>
            Quarry<StyledSpan>Chain</StyledSpan>
          </Text>
        </Container>
      </div>
      <p className="mt-2 text-md text-gray-700 max-w-sm mx-auto md:mx-0">
        QuarryChain is an innovative blockchain network designed to
        revolutionize how developers create and deploy smart contracts and
        decentralized applications (DApps). Our platform offers an ecosystem of
        tools that empower users to freely own and store data at high speed, low
        cost, and with minimal environmental impact.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
        {socialMediaLinks.map(({ href, icon, alt }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1FC7D4] w-12 h-12 text-white text-xl rounded-full flex justify-center items-center"
            aria-label={alt}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterInfo;
