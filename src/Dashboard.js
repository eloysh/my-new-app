// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/edit-card">Edit Card</Link>
      {/* Display card list */}
    </div>
  );
};

export default Dashboard;
