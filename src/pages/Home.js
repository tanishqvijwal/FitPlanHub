import React from 'react';
import { Link } from 'react-router-dom';
import PlanCard from '../components/PlanCard';
import TrainerCard from '../components/TrainerCard';

function Home({ plans, trainers }) {
  return (
    <div>
      {}
      <section className="hero">
        <h1>Fitness for Every Indian</h1>
        <p>Join affordable fitness plans designed by top Indian trainers. Start your fitness journey today!</p>
        <div className="hero-buttons">
          <Link to="/plans" className="btn">
            <i className="fas fa-dumbbell"></i> View All Plans
          </Link>
          <Link to="/login" className="btn btn-outline">
            <i className="fas fa-user-plus"></i> Get Started Free
          </Link>
        </div>
      </section>
      
      {}
      <section className="features">
        <h2>Why Choose FitPlanHub?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-rupee-sign"></i>
            <h3>Affordable Plans</h3>
            <p>Starting from ₹1,299 only</p>
          </div>
          
          <div className="feature-card">
            <i className="fas fa-user-tie"></i>
            <h3>Indian Trainers</h3>
            <p>Train with certified Indian fitness experts</p>
          </div>
          
          <div className="feature-card">
            <i className="fas fa-home"></i>
            <h3>Home Workouts</h3>
            <p>No gym membership needed</p>
          </div>
          
          <div className="feature-card">
            <i className="fas fa-comments"></i>
            <h3>Hindi Support</h3>
            <p>Get guidance in your preferred language</p>
          </div>
        </div>
      </section>
      
      {}
      <section>
        <h2 style={{ color: '#1a237e', marginBottom: '30px', textAlign: 'center' }}>
          Most Popular Plans
        </h2>
        <div className="plans-grid">
          {plans.slice(0, 3).map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/plans" className="btn">
            <i className="fas fa-arrow-right"></i> View All Plans
          </Link>
        </div>
      </section>
      
      {}
      <section style={{ marginTop: '80px' }}>
        <h2 style={{ color: '#1a237e', marginBottom: '30px', textAlign: 'center' }}>
          Meet Our Expert Trainers
        </h2>
        <div className="trainers-grid">
          {trainers.map(trainer => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>
      
      {}
      <div style={{
        background: 'linear-gradient(135deg, #1a237e, #3949ab)',
        color: 'white',
        padding: '50px',
        borderRadius: '15px',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <h2 style={{ marginBottom: '20px' }}>Ready to Transform Your Fitness?</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Join thousands of Indians who have achieved their fitness goals with our trainers
        </p>
        <Link to="/login" className="btn" style={{ background: '#4CAF50', fontSize: '18px', padding: '15px 40px' }}>
          Start Your Journey Today
        </Link>
      </div>
    </div>
  );
}

export default Home;