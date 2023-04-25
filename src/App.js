import './styles/App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
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
