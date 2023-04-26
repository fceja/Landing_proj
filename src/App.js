import './css/App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/NavBar';
import RowButtons from './components/RowButtons';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <RowButtons/>
      <Footer/>
    </div>
  );
}

export default App;
