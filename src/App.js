import "./css/App.css";

import "bootstrap/dist/css/bootstrap.css";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Navbar from "./components/NavBar.jsx";
import CTALinks from "./components/CTALinks.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ImageSlider />
      <CTALinks />
      <Footer />
    </div>
  );
}

export default App;