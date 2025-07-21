import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // In a real app, this would be an API call to your backend
    // This is just a mock implementation
    if (email === 'demo@example.com' && password === 'password123') {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        {error && <div className="login-error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label className="login-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="login-form-group">
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="login-submit-btn"
          >
            Login
          </button>
        </form>
        
        <div className="login-link-container login-secondary-link">
          <Link to="/forgot-password" className="login-link">
            Forgot Password?
          </Link>
        </div>
        
        <div className="login-link-container">
          <p className="login-link-text">
            Don't have an account?{' '}
            <Link to="/signup" className="login-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}