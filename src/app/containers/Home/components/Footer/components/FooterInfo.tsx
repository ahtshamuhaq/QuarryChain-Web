import React from "react";
import { assetPaths } from "../../../../../common/constants";
import {
  FaDiscord,
  FaRedditAlien,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const socialMediaLinks = [
  {
    href: "https://t.me/QuarrychainGroup",
    icon: <FaTelegramPlane className="w-6 h-6" />,
    alt: "Telegram",
  },
  {
    href: "https://www.linkedin.com/company/quarrychain",
    icon: <FaLinkedinIn className="w-6 h-6" />,
    alt: "LinkedIn",
  },
  {
    href: "https://discord.gg/7cZxWJpCyW",
    icon: <FaDiscord className="w-6 h-6" />,
    alt: "Discord",
  },
  {
    href: "https://twitter.com/QuarrychainLLC",
    icon: <BsTwitter className="w-6 h-6" />,
    alt: "Twitter",
  },
  {
    href: "https://www.youtube.com/channel/UCy_08G1sh3ioVplrNQkQ_xQ/featured",
    icon: <BsYoutube className="w-6 h-6" />,
    alt: "YouTube",
  },
  {
    href: "https://www.reddit.com/r/Quarrychain/",
    icon: <FaRedditAlien className="w-6 h-6" />,
    alt: "Reddit",
  },
  {
    href: "https://www.instagram.com/quarrychain/",
    icon: <BsInstagram className="w-6 h-6" />,
    alt: "Instagram",
  },
];

const FooterInfo = () => {
  return (
    <div className="text-center md:text-left mb-6 md:mb-0">
      <div className="flex items-center justify-center md:justify-start space-x-4">
        <img
          className="w-16 h-16 object-contain"
          src={assetPaths.LOGO}
          alt="QuarryChain Logo"
        />
        <h2 className="text-2xl font-bold text-[#1074BC]">
          Quarry<span className="text-[#000]">Chain</span>
        </h2>
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
