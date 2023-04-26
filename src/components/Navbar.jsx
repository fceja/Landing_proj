import "../css/components/NavBar.css";

import HamburgerMenu from './HamburgerMenu.jsx';

export default function NavBar () {
  return (
    <nav className="app-nav">
      <HamburgerMenu/>
    </nav>
  );
}
