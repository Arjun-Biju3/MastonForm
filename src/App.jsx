import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';  // import the CSS file

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';

function App() {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <div className="app-wrapper">
        <div className="intro-text">
          <h2>Your Love Story & Wedding Details – For the Website</h2>
          <p>
            We’re excited to craft your wedding website! Please share the details below to help us create something beautiful, personal, and informative for your guests.
          </p>
        </div>

        <Routes>
          <Route path="/" element={<Page1 formData={formData} setFormData={setFormData} />} />
          <Route path="/page2" element={<Page2 formData={formData} setFormData={setFormData} />} />
          <Route path="/page3" element={<Page3 formData={formData} setFormData={setFormData} />} />
          <Route path="/page4" element={<Page4 formData={formData} setFormData={setFormData} />} />
          <Route path="/page5" element={<Page5 formData={formData} setFormData={setFormData} />} />
          <Route path="/page6" element={<Page6 formData={formData} setFormData={setFormData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
