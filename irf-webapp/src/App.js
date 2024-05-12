import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import RegisterPage from './components/RegisterPage'; // Ensure this is correctly imported
// Import other components like LoginPage

function App() {
  console.log("App component is rendering");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Setup other routes for login and additional pages */}
      </Routes>
    </Router>
  );
}

export default App;
