import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing/index';
import Admin from './pages/Admin/Admin';
import { AuthProvider } from './context/AuthContext';
import { MatchResultsProvider } from './context/MatchResultsContext';

function App() {
  return (
    <AuthProvider>
      <MatchResultsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </MatchResultsProvider>
    </AuthProvider>
  );
}

export default App;
