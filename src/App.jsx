import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from '/src/web_pages/about_us.jsx';
import AppContent from './AppContent.jsx';
import Services from '/src/web_pages/Services.jsx';
import Products from '/src/web_pages/Products.jsx';
import Investors from '/src/web_pages/Investors.jsx';
import Contact from '/src/web_pages/Contact.jsx';
import News from '/src/web_pages/News.jsx';
import LogInPage from '/src/web_pages/LoginPage.jsx';

function App() {
  return (
    <div className='root-wrapper'>
      {/* These divs will be your glowing orbs */}
      <div className="orb orb-purple"></div>
      <div className="orb orb-aqua-1"></div>
      <div className="orb orb-aqua-2"></div>
      <div className="orb orb-dark-1"></div>

      <div className="app-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppContent/>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/loginpage" element={<LogInPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;