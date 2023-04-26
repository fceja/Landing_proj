import '../css/components/Header.css';

export default function Header() {
  return (
    <header id="app-header" className="row justify-content-center align-items-center">
      <img id="img-logo" src={process.env.PUBLIC_URL + "/assets/images/sf_logo.png"} alt="sf_logo"/>
    </header>
  );
}
