import React from 'react';

function PlanCard({ plan, user, onSubscribe }) {
  return (
    <div className="plan-card">
      <div className="plan-header">
        <div className="plan-title">{plan.title}</div>
        <div className="plan-trainer">
          <i className="fas fa-user-circle"></i> Trainer: {plan.trainer}
        </div>
      </div>
      
      <div className="plan-body">
        <div className="plan-description">
          {plan.description}
        </div>
        
        <div className="plan-price">
          ₹{plan.price.toLocaleString('en-IN')}
        </div>
        
        <div className="plan-duration">
          <i className="fas fa-calendar-alt"></i> Duration: {plan.duration}
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <span style={{
            background: '#e3f2fd',
            color: '#1a237e',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            {plan.category}
          </span>
        </div>
        
        <div style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
          <i className="fas fa-users"></i> {plan.subscribers} people joined
        </div>
        
        <button 
          onClick={() => onSubscribe(plan.id)}
          className="btn btn-full"
          style={{ marginTop: '10px' }}
        >
          {user ? 'Join Now' : 'Login to Join'}
        </button>
      </div>
    </div>
  );
}

export default PlanCard;