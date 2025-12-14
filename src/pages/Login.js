import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (onLogin(email, password)) {
      setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      setMessage({ type: 'error', text: 'Invalid email or password' });
    }
  };

  const fillDemo = (type) => {
    if (type === 'user') {
      setEmail('user@example.com');
      setPassword('password123');
      setMessage({ type: 'info', text: 'User demo account filled. Click Login to continue.' });
    } else {
      setEmail('trainer@example.com');
      setPassword('password123');
      setMessage({ type: 'info', text: 'Trainer demo account filled. Click Login to continue.' });
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Welcome Back!</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Login to access your fitness journey
      </p>
      
      {message.text && (
        <div className={`message message-${message.type}`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-full">
          <i className="fas fa-sign-in-alt"></i> Login
        </button>
      </form>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ color: '#666' }}>
          New to FitPlanHub? <a href="/" style={{ color: '#1a237e', fontWeight: 'bold' }}>Create an account</a>
        </p>
        
        <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '30px' }}>
          <p style={{ color: '#666', marginBottom: '15px' }}>Try our demo accounts:</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button 
              type="button" 
              onClick={() => fillDemo('user')}
              className="btn btn-small"
              style={{ background: '#1a237e' }}
            >
              <i className="fas fa-user"></i> User Demo
            </button>
            <button 
              type="button" 
              onClick={() => fillDemo('trainer')}
              className="btn btn-small"
              style={{ background: '#4CAF50' }}
            >
              <i className="fas fa-dumbbell"></i> Trainer Demo
            </button>
          </div>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '15px' }}>
            Both accounts use password: password123
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;