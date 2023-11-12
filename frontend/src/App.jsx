import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index';
import Login from './Login';
import Register from './Register';
import Checkout from './Checkout';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
