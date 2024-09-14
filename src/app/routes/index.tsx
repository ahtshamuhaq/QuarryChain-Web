import { Routes, Route } from "react-router-dom";
import { FAQ } from "../containers/FAQ";
import { Home } from "../containers/Home";
import { QuarryCoin } from "../containers/Tokens/QuarryCoin";
import { QuarrySwapDetails } from "../containers/General/QuarrySwap";
import { RealWorldAssets } from "../containers/General/RealWorldAssets";

// todo -- implement Quarry-Swap-Details container
// todo -- implement container about real world assets

// import { MoaiToken } from "../containers/Tokens/MoaiToken";
// import { TapToken } from "../containers/Tokens/TapToken";
// import { TuffToken } from "../containers/Tokens/TuffToken";

export function CustomRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
{/*      <Route path="/tuff-token" element={<TuffToken />} /> */}
{/*      <Route path="/tap-token" element={<TapToken />} /> */}
{/*      <Route path="/moai-token" element={<MoaiToken />} /> */}
      <Route path="/quarry-coin" element={<QuarryCoin />} />
      <Route path="/quarry-swap-details" element={<QuarrySwapDetails />} />
      <Route path="/real-world-assets" element={<RealWorldAssets />} />
    </Routes>
  );
}
