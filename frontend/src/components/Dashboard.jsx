import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      const intervalId = setInterval(() => {

        setLoggedIn(false);
        clearInterval(intervalId);
      }, 3000);
    }
  }, [loggedIn]);

  const handleLogin = () => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 2000); 
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {loggedIn && <div className="login-message">User is Log in righ now!</div>}
      <div className="widgets-container">
        <div className="widget statistic">
          <h3>Total Users</h3>
          <p>1000</p>
        </div>

        <div className="widget revenue">
          <h3>Total Revenue</h3>
          <p>$50,000</p>
        </div>

        <div className="widget chart">
          <h3>Revenue Chart</h3>
          <p>Chart goes here</p>
        </div>

        <div className="widget card">
          <h3>Recent Orders</h3>
          <div className="order-list">
            <p>Order 1: Product A</p>
            <p>Order 2: Product B</p>
            <p>Order 3: Product C</p>
          </div>
        </div>

      </div>
      <button onClick={handleLogin}>Simulate Login</button>
    </div>
  );
};

export default Dashboard;
