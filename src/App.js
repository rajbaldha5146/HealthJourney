import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing functions
import Header from './components/Header'; // Header component
import Hero from './components/Hero'; // Hero component
import HomePage from './components/pages/HomePage'; // HomePage component
import Home from './views/Home'; // Home component
import BlogList from './components/BlogList';

const App = () => {
  return (
    <Router>
      <div>
        {/* Header component - Fixed at the top */}
        <Header />
        
        {/* Routes for different pages */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero /> {/* Hero section only on the HomePage */}
                <HomePage />
              </div>
            }
          />
          <Route path="/diet-plan" element={<Home/>} />
          <Route path="/blogs" element={<BlogList/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
