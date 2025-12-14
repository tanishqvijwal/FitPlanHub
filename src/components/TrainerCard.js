import React from 'react';

function TrainerCard({ trainer }) {
  return (
    <div className="trainer-card">
      <div className="trainer-avatar">
        {trainer.avatar}
      </div>
      
      <h3>{trainer.name}</h3>
      <p className="trainer-specialty">{trainer.specialty}</p>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
        {trainer.experience}
      </p>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px',
        marginBottom: '20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#4CAF50' 
          }}>
            {trainer.rating}
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>Rating</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#1a237e' 
          }}>
            {trainer.plans}
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>Plans</div>
        </div>
      </div>
      
      <button className="btn btn-outline btn-small">
        <i className="fas fa-eye"></i> View Profile
      </button>
    </div>
  );
}

export default TrainerCard;