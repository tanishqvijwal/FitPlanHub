import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Plans from './pages/Plans';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([
    {
      id: 1,
      title: "Cricket Fitness Program",
      description: "Professional cricket fitness training designed by former cricket coach. Includes strength training, agility drills, and injury prevention.",
      price: 3499,
      duration: "45 days",
      trainer: "Yuvraj Singh Jat",
      category: "Sports Fitness",
      subscribers: 52,
      features: ["Strength Training", "Agility Drills", "Injury Prevention", "Diet Plan"]
    },
    {
      id: 2,
      title: "Yoga & Meditation Masterclass",
      description: "Traditional yoga and meditation techniques for modern lifestyle. Perfect for stress relief and flexibility improvement.",
      price: 2199,
      duration: "30 days",
      trainer: "Janhavi Gupta",
      category: "Yoga",
      subscribers: 78,
      features: ["Daily Yoga", "Meditation", "Breathing Exercises", "Flexibility"]
    },
    {
      id: 3,
      title: "Advanced Weight Training",
      description: "Complete weight training program for muscle building. Includes progressive overload and proper form techniques.",
      price: 2999,
      duration: "60 days",
      trainer: "Shivendra Pratap Singh",
      category: "Weight Training",
      subscribers: 45,
      features: ["Progressive Overload", "Form Correction", "6-Day Split", "Recovery"]
    },
    {
      id: 4,
      title: "Indian Diet & Nutrition",
      description: "Customized Indian diet plans based on your body type and goals. Includes vegetarian and non-vegetarian options.",
      price: 1899,
      duration: "30 days",
      trainer: "Madhvendra Gaur",
      category: "Nutrition",
      subscribers: 63,
      features: ["Custom Diet", "Shopping List", "Meal Timing", "Supplement Guide"]
    },
    {
      id: 5,
      title: "Home Workout - Beginner",
      description: "No equipment needed! Complete home workout program for beginners. Perfect for busy schedules.",
      price: 1299,
      duration: "21 days",
      trainer: "Ruchit Sharma",
      category: "Home Workout",
      subscribers: 89,
      features: ["No Equipment", "30 Min/Day", "Beginner Friendly", "Progress Tracking"]
    },
    {
      id: 6,
      title: "Women's Fitness Program",
      description: "Special fitness program designed for Indian women. Focus on toning, strength, and overall wellness.",
      price: 2499,
      duration: "42 days",
      trainer: "Aashi Jain",
      category: "Women's Fitness",
      subscribers: 57,
      features: ["Toning Exercises", "Strength Training", "Wellness Tips", "Community Support"]
    },
    {
      id: 7,
      title: "Cardio & Endurance Builder",
      description: "Build stamina and endurance with this cardio-focused program. Includes running, cycling, and HIIT workouts.",
      price: 1999,
      duration: "30 days",
      trainer: "Vaibhav Shrivastava",
      category: "Cardio",
      subscribers: 41,
      features: ["Running Plans", "Cycling", "HIIT Workouts", "Stamina Building"]
    }
  ]);

  const [trainers] = useState([
    {
      id: 1,
      name: "Yuvraj Singh Jat",
      specialty: "Cricket Fitness Coach",
      experience: "8 years experience",
      rating: 4.9,
      plans: 2,
      avatar: "YSJ",
      bio: "Former cricket coach specializing in sports fitness"
    },
    {
      id: 2,
      name: "Janhavi Gupta",
      specialty: "Yoga & Meditation Expert",
      experience: "10 years experience",
      rating: 4.8,
      plans: 3,
      avatar: "JG",
      bio: "Certified yoga instructor with international experience"
    },
    {
      id: 3,
      name: "Shivendra Pratap Singh",
      specialty: "Weight Training Specialist",
      experience: "7 years experience",
      rating: 4.7,
      plans: 2,
      avatar: "SPS",
      bio: "Professional bodybuilding coach and trainer"
    },
    {
      id: 4,
      name: "Madhvendra Gaur",
      specialty: "Nutrition & Diet Coach",
      experience: "6 years experience",
      rating: 4.8,
      plans: 1,
      avatar: "MG",
      bio: "Nutritionist specializing in Indian diet plans"
    },
    {
      id: 5,
      name: "Ruchit Sharma",
      specialty: "Home Workout Trainer",
      experience: "5 years experience",
      rating: 4.6,
      plans: 2,
      avatar: "RS",
      bio: "Expert in no-equipment home workouts"
    },
    {
      id: 6,
      name: "Aashi Jain",
      specialty: "Women's Fitness Expert",
      experience: "9 years experience",
      rating: 4.9,
      plans: 2,
      avatar: "AJ",
      bio: "Specialist in women's health and fitness"
    },
    {
      id: 7,
      name: "Vaibhav Shrivastava",
      specialty: "Cardio & Endurance Coach",
      experience: "6 years experience",
      rating: 4.7,
      plans: 1,
      avatar: "VS",
      bio: "Marathon runner and endurance training coach"
    }
  ]);

  useEffect(() => {
    const savedUser = localStorage.getItem('fitplanhub_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "user@example.com" && password === "password123") {
      const userData = {
        name: "Tanishq Vijwal",
        email: email,
        role: "user",
        joined: "2023",
        avatar: "AK"
      };
      setUser(userData);
      localStorage.setItem('fitplanhub_user', JSON.stringify(userData));
      return true;
    }
    if (email === "trainer@example.com" && password === "password123") {
      const userData = {
        name: "Yuvraj Singh Jat",
        email: email,
        role: "trainer",
        joined: "2020",
        avatar: "YSJ"
      };
      setUser(userData);
      localStorage.setItem('fitplanhub_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('fitplanhub_user');
  };

  const handleSubscribe = (planId) => {
    if (!user) {
      alert("Please login first to subscribe to plans!");
      return false;
    }
    alert(`Congratulations! You have subscribed to plan #${planId}.`);
    return true;
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} onLogout={handleLogout} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home plans={plans} trainers={trainers} />} />
            <Route path="/login" element={
              user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/plans" element={
              <Plans plans={plans} trainers={trainers} user={user} onSubscribe={handleSubscribe} />
            } />
          </Routes>
        </div>
        
        <footer className="footer">
          <p>© 2023 FitPlanHub India. Fitness plans for every Indian. Train with the best Indian trainers at affordable prices.</p>
          <p style={{ marginTop: '10px', fontSize: '14px', opacity: '0.8' }}>
            Made with ❤️ for fitness enthusiasts across India
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;