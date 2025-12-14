import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <i className="fas fa-dumbbell"></i>
          <span>FitPlanHub India</span>
        </div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plans">Fitness Plans</Link>
          
          {user ? (
            <>
              <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                <i className="fas fa-user" style={{ marginRight: '8px' }}></i>
                {user.name}
              </span>
              <button onClick={onLogout} className="btn btn-small">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-small">
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;