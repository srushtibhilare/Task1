// src/pages/Auth/SignUp.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

export default function SignUp({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Replace with actual API call
      const response = await fakeSignupAPI(formData);
      
      if (response.success) {
        setIsAuthenticated(true);
        navigate('/');
      } else {
        setError(response.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  // Mock API function
  const fakeSignupAPI = (data) => {
    return new Promise(resolve => {
      setTimeout(() => {
        // In a real app, this would send data to your backend
        resolve({ success: true });
      }, 500);
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-title">Create Account</h2>
        {error && <div className="signup-error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <button
            type="submit"
            className="submit-btn"
          >
            Create Account
          </button>
        </form>
        
        <div className="login-link-container">
          <p className="login-text">
            Already have an account?{' '}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}