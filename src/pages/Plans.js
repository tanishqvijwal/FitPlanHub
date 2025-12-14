import React from 'react';
import PlanCard from '../components/PlanCard';
import TrainerCard from '../components/TrainerCard';

function Plans({ plans, trainers, user, onSubscribe }) {
  return (
    <div>
      <h1 style={{ 
        color: '#1a237e', 
        textAlign: 'center', 
        marginBottom: '20px',
        fontSize: '36px'
      }}>
        Fitness Plans
      </h1>
      <p style={{ 
        textAlign: 'center', 
        color: '#666', 
        fontSize: '18px', 
        marginBottom: '40px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Choose from our collection of fitness plans designed by top Indian trainers
      </p>
      
      <div className="plans-grid">
        {plans.map(plan => (
          <PlanCard 
            key={plan.id} 
            plan={plan} 
            user={user}
            onSubscribe={onSubscribe}
          />
        ))}
      </div>
      
      {}
      <div style={{
        background: '#f8f9fa',
        padding: '40px',
        borderRadius: '15px',
        marginTop: '60px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#1a237e', marginBottom: '30px' }}>Why Our Members Love Us</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px'
        }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#4CAF50' }}>
              5,000+
            </div>
            <div style={{ color: '#666' }}>Active Members</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1a237e' }}>
              20+
            </div>
            <div style={{ color: '#666' }}>Expert Trainers</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#4CAF50' }}>
              50+
            </div>
            <div style={{ color: '#666' }}>Fitness Plans</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1a237e' }}>
              4.8/5
            </div>
            <div style={{ color: '#666' }}>Average Rating</div>
          </div>
        </div>
      </div>
      
      {}
      <div style={{ marginTop: '80px' }}>
        <h2 style={{ 
          color: '#1a237e', 
          textAlign: 'center', 
          marginBottom: '40px'
        }}>
          All Our Expert Trainers
        </h2>
        <div className="trainers-grid">
          {trainers.map(trainer => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;