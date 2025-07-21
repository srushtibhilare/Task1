import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic
    console.log({ email });
    // In a real app, this would trigger an OTP email
    // For demo, we'll navigate to OTP verification
    window.location.href = '/verify-otp';
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2 className="forgot-password-title">Forgot Password</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="forgot-password-form-group">
            <label className="forgot-password-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="forgot-password-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="forgot-password-help-text">
              We'll send a one-time password (OTP) to this email.
            </p>
          </div>
          
          <button
            type="submit"
            className="forgot-password-submit-btn"
          >
            Send OTP
          </button>
        </form>
        
        <div className="forgot-password-link-container">
          <Link to="/login" className="forgot-password-link">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}