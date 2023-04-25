// import { ReactComponent as LogoSvg } from '../images/sf_logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <img src={process.env.PUBLIC_URL + "/images/sf_logo.png"} alt="sf_logo"/>
    </header>
  );
}
