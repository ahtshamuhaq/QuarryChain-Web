import { Icon } from "../../../../../../../common/Icon";
import { socialMediaIcons } from "../../../constants";
import { SingleIcon } from "../SocialPlatforms.styles";

interface SocialMedia {
  name: string;
  url: string;
}

export function socialPlatformItemsToShow(
  numberOfItems?: number,
  invertColors?: boolean,
  smallSize?: boolean
) {
  return (
    <>
      {(numberOfItems ? socialMediaIcons.slice(0, numberOfItems) : socialMediaIcons).map((socialMedia: SocialMedia, index: number) => (
        <SingleIcon
          key={index}
          invertColors={invertColors}
          smallSize={smallSize}
          onClick={() => window.open(socialMedia.url, "_blank")}
        >
          <Icon name={socialMedia.name} />
        </SingleIcon>
      ))}
    </>
  );
}
