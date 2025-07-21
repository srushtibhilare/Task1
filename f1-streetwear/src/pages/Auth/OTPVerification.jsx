import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OTPVerification.css';

export default function OTPVerification() {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1: OTP entry, 2: Password reset

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Verify OTP (in a real app, this would check against server)
    console.log({ otp });
    setStep(2);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password reset
    console.log({ newPassword, confirmPassword });
    // Redirect to login after successful reset
    window.location.href = '/login';
  };

  return (
    <div className="otp-container">
      <div className="otp-form-container">
        {step === 1 ? (
          <>
            <h2 className="otp-title">Verify OTP</h2>
            
            <form onSubmit={handleOtpSubmit}>
              <div className="otp-form-group">
                <label className="otp-label" htmlFor="otp">
                  One-Time Password
                </label>
                <input
                  type="text"
                  id="otp"
                  className="otp-input"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <p className="otp-help-text">
                  Check your email for the 6-digit code.
                </p>
              </div>
              
              <button
                type="submit"
                className="otp-submit-btn"
              >
                Verify OTP
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="otp-title">Reset Password</h2>
            
            <form onSubmit={handlePasswordSubmit}>
              <div className="otp-form-group">
                <label className="otp-label" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="otp-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="otp-form-group">
                <label className="otp-label" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="otp-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="otp-submit-btn"
              >
                Reset Password
              </button>
            </form>
          </>
        )}
        
        <div className="otp-back-link">
          <Link to="/login">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}