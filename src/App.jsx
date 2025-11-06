{/* */}
{/* Import necessary libraries, components etc */}
// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';

import AboutUs from '/src/web_pages/about_us.jsx';
import AppContent from './AppContent.jsx';
import Services from '/src/web_pages/Services.jsx';
import Products from '/src/web_pages/Products.jsx';
import Investors from '/src/web_pages/Investors.jsx';
import Contact from '/src/web_pages/Contact.jsx';
import News from '/src/web_pages/News.jsx';
import LogInPage from '/src/web_pages/LoginPage.jsx';
import ServiceCustomOrder from '/src/web_pages/ServiceCustomOrder.jsx';
import SignupPage from '/src/web_pages/SignupPage.jsx';
import FAQs from '/src/web_pages/FAQs.jsx';
import DataSheets from '/src/web_pages/DataSheets.jsx';
import InvestmentSummaries from '/src/web_pages/InvestmentSummaries.jsx';
import Brochure from '/src/web_pages/Brochure.jsx';
import OnlineWhiteboard from '/src/web_pages/OnlineWhiteboard.jsx';
import TeamCollaboration from '/src/web_pages/TeamCollaboration.jsx';
import CustomerService from '/src/web_pages/CustomerService.jsx';
import PrivacyPolicy from '/src/web_pages/PrivacyPolicy.jsx';
import Sitemap from '/src/web_pages/Sitemap.jsx';
import Subscriptions from '/src/web_pages/Subscriptions.jsx';


function App() {
  return (
    // Wraps the entire block in the ThemeProvider
    <ThemeProvider>
      {/* // CSS wrapping for main pages so that orbs show in background of all pages */}
      <div className="root-wrapper">
        <div className="orb orb-purple"></div>
        <div className="orb orb-aqua-1"></div>
        <div className="orb orb-aqua-2"></div>
        <div className="orb orb-dark-1"></div>

        <div className="app-wrapper">
          {/* Provide path routing between pages through BroswerRouter component*/}
          <BrowserRouter>
            <Routes>
              {/* public pages */}
              <Route path="/" element={<AppContent />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/servicecustomorder" element={<ServiceCustomOrder />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/datasheets" element={<DataSheets />} />
              <Route path="/investmentsummaries" element={<InvestmentSummaries />} />
              <Route path="/brochure" element={<Brochure />} />
              <Route path="/onlinewhiteboard" element={<OnlineWhiteboard />} />
              <Route path="/teamcollaboration" element={<TeamCollaboration />} />
              <Route path="/customerservice" element={<CustomerService />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/subscriptions" element={<Subscriptions />} />                                                                        

              {/* auth */}
              <Route path="/login" element={<LogInPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* legacy redirect: /loginpage -> /login */}
              <Route path="/loginpage" element={<Navigate to="/login" replace />} />

              {/* catch-all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
