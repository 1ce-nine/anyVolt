import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './about_us.jsx';
import AppContent from './AppContent.jsx';
import Services from './Services.jsx';
import Products from './Products.jsx';
import Investors from './Investors.jsx';
import Contact from './Contact.jsx';
import News from './News.jsx';
import LogInPage from './LoginPage.jsx';

function App() {
  return (
    <div className='app-wrapper'>
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
  );
}

export default App;