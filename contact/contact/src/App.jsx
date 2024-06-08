import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  
import ContactUs from './ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
