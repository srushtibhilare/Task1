import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import OTPVerification from './pages/Auth/OTPVerification';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/category/tees" element={<Category isAuthenticated={isAuthenticated} />} />
        <Route path="/product/:id" element={<Product isAuthenticated={isAuthenticated} />} />
        <Route 
          path="/cart" 
          element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/signup" 
          element={<SignUp setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<OTPVerification setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;