import { isMobile } from "react-device-detect";

import BrowserNav from "./BrowserNav";
import MobileNav from "./MobileNav";

function NavBar() {
  if (isMobile) return <MobileNav />;
  else return <BrowserNav />;
}

export default NavBar;
