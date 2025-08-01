import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './about_us.jsx';
import AppContent from './AppContent.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContent/>} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;