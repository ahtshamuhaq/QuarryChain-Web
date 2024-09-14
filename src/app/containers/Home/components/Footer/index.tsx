import FooterInfo from "./components/FooterInfo";
import FooterLinks from "./components/FooterLinks";
import FooterTeam from "./components/FooterTeam";
import { assetPaths } from "../../../../common/constants";

export function Footer() {
  return (
    <footer
      className="bg-cover bg-center py-8"
      style={{ backgroundImage: `url(${assetPaths.FOOTER_BG})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <FooterInfo/>
          <FooterLinks/>
          <FooterTeam/>
        </div>
      </div>
    </footer>
  );
}
