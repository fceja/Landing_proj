import "../css/components/NavBar.css";

import HamburgerMenu from './HamburgerMenu.jsx';
import TelNumber from "./TelNumber.jsx";

export default function NavBar () {
  return (
    <nav className="app-nav">
      <HamburgerMenu/>
      <TelNumber/>
    </nav>
  );
}
