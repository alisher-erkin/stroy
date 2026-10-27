
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App font-roboto">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
