import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="/casino" element={<App />} />
        <Route path="/:null" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
