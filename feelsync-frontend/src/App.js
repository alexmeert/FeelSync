// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import MoodEntryPage from './pages/MoodEntryPage';
import MoodHistoryPage from './pages/MoodHistoryPage';
import SettingsPage from './pages/SettingsPage';
import Navbar from './components/Navbar';

// Protected Route Component
function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    // Simulate authentication logic
    if (email && password) {
      localStorage.setItem('auth', 'true'); // Set user as authenticated
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Remove user authentication
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" 
            element={<PrivateRoute isAuthenticated={isAuthenticated}><DashboardPage /></PrivateRoute>} />
          <Route path="/mood-entry" 
            element={<PrivateRoute isAuthenticated={isAuthenticated}><MoodEntryPage /></PrivateRoute>} />
          <Route path="/mood-history" 
            element={<PrivateRoute isAuthenticated={isAuthenticated}><MoodHistoryPage /></PrivateRoute>} />
          <Route path="/settings" 
            element={<PrivateRoute isAuthenticated={isAuthenticated}><SettingsPage /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;