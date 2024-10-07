import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS file, if you have one
import App from './App'; // Import the main App component
import { BrowserRouter } from 'react-router-dom'; // Wrap the app in Router for routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
