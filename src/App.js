import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import Repair from './Pages/Repair/Repair';
import Design from './Pages/Design/Design';
import Aboutus from './Pages/Aboutus/Aboutus';
import Contacts from './Pages/Contacts/Contacts';
import './theme.css';
import './pages.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/design" element={<Design />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
